// @flow

import React, { Component } from 'react'
import { Dimensions, Text, View } from 'react-native'
import { observer } from 'mobx-react/native'
import styles from './Style'
import store from './Store'

type Props = {}
type State = {}
@observer
export default class SideMenu extends Component<Props, State> {
  render() {
    let WIDTH = Dimensions.get('window').width
    let HEIGHT = Dimensions.get('window').height
    return (
      <View style={styles.menu}>
        <View style={styles.menu_item}>
          <Text
            style={{ fontSize: 20, color: '#808080' }}
            onPress={() => {
              store.show_results = false
              store.show_menu = false
            }}
          >
            Products
          </Text>
        </View>
        <View style={styles.menu_item}>
          <Text
            style={{ fontSize: 20, color: '#808080' }}
            onPress={() => {
              store.show_cart = true
              store.show_menu = false
            }}
          >
            Cart
          </Text>
        </View>
      </View>
    )
  }
}
