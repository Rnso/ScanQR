// @flow

import React, { Component } from 'react'
import {
  Platform,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
  RefreshControl,
  WebView,
  ScrollView,
  ActivityIndicator,
  Share,
  AlertIOS,
  Alert,
} from 'react-native'
import { Icon, SearchBar } from 'react-native-elements'
import { observer } from 'mobx-react/native'
import QRCodeScanner from 'react-native-qrcode-scanner'
import styles from './Style'
import store from './Store'

type Props = {}
type State = {}

@observer
export default class Scanner extends Component<Props, State> {
  handleReadScanner(e) {
    console.log(e.data)
    let index = store.items.findIndex(item => {
      return item.id === e.data
    })
    if (index >= 0) {
      Platform.OS === 'ios'
        ? AlertIOS.alert('Product Found', `View the product?`, [
            {
              text: 'View',
              onPress: this.handleShowProductDetails.bind(this, e.data),
            },
            {
              text: 'No',
              onPress: () => {
                store.show_scanner = false
              },
            },
          ])
        : Alert.alert('Product Found', `View the product?`, [
            {
              text: 'No',
              onPress: () => {
                store.show_scanner = false
              },
            },
            {
              text: 'View',
              onPress: this.handleShowProductDetails.bind(this, e.data),
            },
          ])
    } else {
      Platform.OS === 'ios'
        ? AlertIOS.alert('Product not Found', ``, [
            {
              text: 'Okay',
              onPress: () => {
                store.show_scanner = false
              },
            },
          ])
        : Alert.alert('Product not Found', ``, [
            {
              text: 'Okay',
              onPress: () => {
                store.show_scanner = false
              },
            },
          ])
    }
  }
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
    store.show_scanner = false
  }
  render() {
    let WIDTH = Dimensions.get('window').width
    let HEIGHT = Dimensions.get('window').height
    return (
      <View style={styles.menu_container}>
        <View style={styles.overlay}>
          <QRCodeScanner
            ref={node => {
              this.scanner = node
            }}
            cameraStyle={{ flex: 0, width: WIDTH, height: HEIGHT, backgroundColor: 'transparent' }}
            onRead={this.handleReadScanner.bind(this)}
          />
        </View>
        <View style={{ position: 'absolute', top: 35, left: 15 }}>
          <TouchableOpacity onPress={() => (store.show_scanner = false)}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Icon
                containerStyle={{ marginLeft: 10 }}
                name="ios-arrow-back"
                type="ionicon"
                size={30}
                color="#FFFFFF"
              />
              <Text style={{ fontWeight: 'bold', color: '#FFFFFF', fontSize: 23 }}> Back</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}
