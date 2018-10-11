// @flow

import React, { Component } from 'react'
import { Platform, Text, View, Image, TouchableOpacity, ScrollView, Share } from 'react-native'
import { Icon } from 'react-native-elements'
import { observer } from 'mobx-react/native'
import styles from './Style'
import store from './Store'

type Props = {}
type State = {}
@observer
export default class ProductDetails extends Component<Props, State> {
  handleShare(title: string, link: string) {
    Share.share(
      {
        message: undefined,
        url: `${link}`,
        title: `${title}`,
      },
      {
        dialogTitle: `${title}`,
      },
    )
      .then(result => {
        console.log(result)
      })
      .catch(err => console.log(err))
  }
  handleAddToCart() {
    store.sub_total = 0
    let indx = store.cart_items.findIndex(item => {
      return item.id === store.selected_id
    })
    if (indx >= 0) {
      store.cart_items[indx].price = store.cart_items[indx].price + store.selected_price
      store.cart_items[indx].count = store.cart_items[indx].count + 1
    } else {
      store.cart_items.push({
        id: store.selected_id,
        title: store.selected_title,
        authors: store.selected_authors,
        publisher: store.selected_publisher,
        image: store.selected_image,
        info: store.selected_info,
        date: store.selected_date,
        desc: store.selected_desc,
        price: store.selected_price,
        count: 1,
      })
    }
    store.cart_items.map(item => {
      store.sub_total = store.sub_total + item.price
    })
    store.grand_total = store.sub_total + store.shipping_charges
    store.cart_items_count = store.cart_items_count + 1
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => (store.show_product_details = false)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                containerStyle={{ marginLeft: 10 }}
                name="ios-arrow-back"
                type="ionicon"
                size={30}
                color="#CD5C5C"
              />
              <Text style={[styles.font, { fontWeight: 'bold', color: '#CD5C5C' }]}> Back</Text>
            </View>
          </TouchableOpacity>
          <Text style={[styles.font, { fontWeight: 'bold' }]}>Product details</Text>
          <TouchableOpacity
            onPress={() => {
              store.show_cart = true
            }}
            hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
          >
            <Icon
              containerStyle={Platform.OS === 'ios' ? { marginRight: 18 } : { marginRight: 18, height: 50 }}
              name="md-cart"
              type="ionicon"
              size={28}
              color="black"
            />
            {store.cart_items_count !== 0 ? (
              <View style={styles.badge}>
                <Text style={{ color: '#FFFFFF' }}>{store.cart_items_count}</Text>
              </View>
            ) : null}
          </TouchableOpacity>
        </View>
        <View style={styles.align}>
          <View style={{ flex: 10 }}>
            <ScrollView>
              <View style={{ backgroundColor: '#FFFFFF' }}>
                <TouchableOpacity
                  style={{ flexDirection: 'row-reverse', padding: 15 }}
                  hitSlop={{ top: 10, bottom: 10, left: 30, right: 30 }}
                >
                  <Icon
                    name={Platform.OS === 'ios' ? 'ios-share-outline' : 'share'}
                    type={Platform.OS === 'ios' ? 'ionicon' : 'material'}
                    size={28}
                    color="#808080"
                    onPress={this.handleShare.bind(this, store.selected_title, store.selected_info)}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    alignItems: 'center',
                    borderBottomWidth: 0.7,
                    borderBottomColor: '#DCDCDC',
                    margin: 5,
                  }}
                >
                  <Image
                    style={{ width: 130, height: 200, padding: 5, marginBottom: 20 }}
                    source={{ uri: store.selected_image }}
                  />
                </View>
                <View
                  style={{
                    padding: 15,
                    marginTop: 10,
                    borderBottomWidth: 0.7,
                    borderBottomColor: '#DCDCDC',
                  }}
                >
                  <Text style={{}}>{store.selected_authors}</Text>
                  <Text style={[styles.font, { fontWeight: 'bold' }]}>{store.selected_title}</Text>
                  <Text style={{ fontWeight: 'bold', fontSize: 25 }}>${store.selected_price}</Text>
                  <Text style={{ color: '#008000', fontSize: 20 }}>In Stock.</Text>
                </View>
              </View>
              <View style={{ marginTop: 20, marginBottom: 10 }}>
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}> PRODUCT INFORMATION</Text>
              </View>
              <View style={{ backgroundColor: '#FFFFFF' }}>
                <Text style={{ color: '#CD5C5C', fontSize: 15, fontWeight: 'bold', padding: 8 }}>
                  DESCRIPTION
                </Text>
              </View>
              <View style={{ backgroundColor: '#FFFFFF' }}>
                <Text style={{ fontSize: 15, padding: 10 }}>{store.selected_desc}</Text>
              </View>
            </ScrollView>
            <View
              style={[
                styles.footer,
                { backgroundColor: '#CD5C5C', alignItems: 'center', padding: 5 },
              ]}
            >
              <TouchableOpacity
                onPress={() => {
                  this.handleAddToCart()
                }}
              >
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <Icon name="md-cart" type="ionicon" size={26} color="#FFFFFF" />
                  <Text style={{ fontSize: 18, color: '#FFFFFF' }}> ADD TO CART</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    )
  }
}
