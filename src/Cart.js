// @flow

import React, { Component } from 'react'
import { Dimensions, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Icon } from 'react-native-elements'
import { observer } from 'mobx-react/native'
import styles from './Style'
import store from './Store'

type Props = {}
type State = {}
@observer
export default class Cart extends Component<Props, State> {
  handleShowProductDetails(id: string) {
    let index = store.items.findIndex(item => {
      return item.id === id
    })
    store.selected_id = store.items[index].id
    store.selected_title = store.items[index].title
    store.selected_authors = store.items[index].authors
    store.selected_publisher = store.items[index].publisher
    store.selected_image = store.items[index].imageLinks
    store.selected_info = store.items[index].infoLink
    store.selected_date = store.items[index].publishedDate
    store.selected_desc = store.items[index].description
    store.selected_price = store.items[index].price
    store.show_product_details = true
    store.show_cart = false
  }
  handleRemoveFromCart(indx: number) {
    if (store.cart_items[indx].count > 1) {
      store.cart_items[indx].price =
        store.cart_items[indx].price - store.cart_items[indx].price / store.cart_items[indx].count
      store.cart_items[indx].count = store.cart_items[indx].count - 1
    } else {
      store.cart_items.splice(indx, 1)
    }
    store.cart_items_count = store.cart_items_count - 1
    store.sub_total = 0
    store.cart_items.map(item => {
      store.sub_total = store.sub_total + item.price
    })
    store.grand_total = store.sub_total + store.shipping_charges
  }
  render() {
    let WIDTH = Dimensions.get('window').width
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => (store.show_cart = false)}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 10 }}>
              <Icon name="ios-arrow-back" type="ionicon" size={30} color="#CD5C5C" />
              <Text style={[styles.font, { fontWeight: 'bold', color: '#CD5C5C' }]}> Back</Text>
            </View>
          </TouchableOpacity>
          <Text style={[styles.font, { fontWeight: 'bold' }]}>Shopping cart</Text>
          <Text style={{ color: '#f2f2f2' }}>Shopping cart ({store.cart_items_count})</Text>
        </View>

        {store.cart_items.length ? (
          <ScrollView>
            <View style={[styles.align, { flex: 10 }]}>
              {store.cart_items.map((item, i) => {
                return (
                  <TouchableOpacity
                    key={i}
                    onPress={this.handleShowProductDetails.bind(this, item.id)}
                    style={{ backgroundColor: '#FFFFFF', marginBottom: 5 }}
                  >
                    <View
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        marginLeft: 15,
                        padding: 10,
                        borderBottomWidth: 1,
                        borderBottomColor: '#DCDCDC',
                      }}
                    >
                      <Image
                        style={{ width: 80, height: 120, marginRight: 10, borderRadius: 5 }}
                        source={{ uri: item.image }}
                      />
                      <View style={{ width: WIDTH / 3 }}>
                        <Text style={{ marginBottom: 3 }}>{item.title}</Text>
                        <Text style={{ color: '#808080', marginBottom: 8 }}>by {item.authors}</Text>
                      </View>
                      <TouchableOpacity
                        onPress={this.handleRemoveFromCart.bind(this, i)}
                        hitSlop={{ top: 10, bottom: 10, left: 30, right: 30 }}
                      >
                        <Icon name="delete" type="material" size={25} color="#808080" />
                      </TouchableOpacity>
                    </View>
                    <View
                      style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 10 }}
                    >
                      <Text style={{ padding: 5 }}>Quantity: {item.count}</Text>
                      <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 15 }}>
                        ${item.price}
                      </Text>
                    </View>
                  </TouchableOpacity>
                )
              })}

              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: 10,
                  alignItems: 'center',
                  borderBottomWidth: 0.8,
                  borderBottomColor: '#DCDCDC',
                }}
              >
                <Text style={{ padding: 5, fontWeight: 'bold', fontSize: 16 }}>
                  Payment Details
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: '#FFFFFF',
                  padding: 10,
                  borderBottomWidth: 0.8,
                  borderBottomColor: '#DCDCDC',
                }}
              >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                  <Text>Subtotal:</Text>
                  <Text>${store.sub_total}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                  <Text>Shipping Charges:</Text>
                  <Text>${store.shipping_charges}</Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 5 }}>
                  <Text style={{ fontSize: 15 }}>Grand Total:</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 15 }}>${store.grand_total}</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        ) : (
          <View
            style={[styles.align, { flex: 10, alignItems: 'center', justifyContent: 'center' }]}
          >
            <Icon name="md-cart" type="ionicon" size={WIDTH / 2} color="#C0C0C0" />
            <Text style={{ fontSize: 28, color: '#C0C0C0' }}>YOUR CART IS EMPTY</Text>
            <TouchableOpacity
              onPress={() => {
                store.show_cart = false
                store.show_product_details = false
              }}
            >
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#CD5C5C',
                  width: WIDTH / 2,
                  height: 30,
                  padding: 5,
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <Text style={{ fontSize: 15, color: '#FFFFFF' }}>START SHOPPING </Text>
                <Icon name="chevron-right" type="material" size={23} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </View>
        )}

        {store.cart_items.length ? (
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <View
              style={{
                width: WIDTH / 2,
                height: 50,
                backgroundColor: '#FFFFFF',
                alignItems: 'center',
                padding: 10,
                marginTop: 5,
                marginBottom: 5,
              }}
            >
              <Text style={{ fontSize: 13 }}>Grand Total:</Text>
              <Text style={{ fontSize: 15, color: '#CD5C5C', fontWeight: 'bold' }}>
                ${store.grand_total}
              </Text>
            </View>
            <TouchableOpacity onPress={() => {}}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#CD5C5C',
                  width: WIDTH / 2,
                  height: 50,
                  padding: 10,
                  marginTop: 5,
                  marginBottom: 5,
                }}
              >
                <Text style={{ fontSize: 15, color: '#FFFFFF' }}>PROCEED </Text>
                <Icon name="chevron-right" type="material" size={23} color="#FFFFFF" />
              </View>
            </TouchableOpacity>
          </View>
        ) : null}
      </View>
    )
  }
}
