// @flow

import React, { Component } from 'react'
import {
  Platform,
  Dimensions,
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  ScrollView,
  Animated
} from 'react-native'
import { Icon, SearchBar } from 'react-native-elements'
import SplashScreen from 'react-native-splash-screen'
import { observer } from 'mobx-react/native'
import styles from './Style'
import store from './Store'
import ProductDetails from './ProductDetails'
import Cart from './Cart'
import Scanner from './Scanner'
import SideMenu from './SideMenu'

type Props = {}

type data = {
  id: string,
  selfLink: string,
  title: string,
  imageLinks: string,
  authors: [],
  publisher: string,
  publishedDate: string,
  description: string,
  price: number,
}

type State = {
  products?: data[],
  gridview: boolean,
  clear_icon: boolean,
  search_string: string,
}
@observer
export default class App extends Component<Props, State> {
  constructor() {
    super()
    this.state = {
      gridview: false,
      search_string: '',
      products: [],
      clear_icon: true,
    }
  }
  componentDidMount() {
    setTimeout(() => {
      SplashScreen.hide()
    }, 1000)

  }
  handleShowMenu() {
    store.show_menu = store.show_menu ? false : true
  }
  handleChangeText(text: string) {
    this.state.search_string = text
    this.state.clear_icon = this.state.search_string === '' ? false : true
    this.setState(this.state)
    this.handleSeachPoducts()
  }
  handleSeachPoducts() {
    let filtered = store.items.filter(item => {
      return item.title.toLowerCase().indexOf(this.state.search_string.toLowerCase()) >= 0 || item.authors.toLowerCase().indexOf(this.state.search_string.toLowerCase()) >= 0
    })
    this.setState({ products: filtered })
    store.show_results = true
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
  }
  render() {
    let WIDTH = Dimensions.get('window').width
    return (
      <View style={styles.container}>
        {store.show_scanner ? (
          <Scanner />
        ) : (
            <View style={styles.container}>
              {store.show_cart ? (
                <Cart />
              ) : (
                  <View style={styles.container}>
                    {store.show_product_details ? (
                      <ProductDetails />
                    ) : (
                        <View style={styles.menu_container}>
                          <View style={styles.overlay}>
                            <View style={styles.header}>
                              <TouchableOpacity
                                onPress={() => this.handleShowMenu()}
                                hitSlop={{ top: 20, bottom: 20, left: 30, right: 40 }}
                              >
                                <Icon
                                  containerStyle={{ marginLeft: 10 }}
                                  name="md-menu"
                                  type="ionicon"
                                  size={28}
                                  color="#CD5C5C"
                                />
                              </TouchableOpacity>
                              <Text
                                style={[styles.font, { fontWeight: 'bold' }]}
                                onPress={() => {
                                  this.setState({ search_string: '' })
                                  store.show_results = false
                                }}
                              >
                                Products
                        </Text>
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
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  marginBottom: 5,
                                }}
                              >
                                <SearchBar
                                  lightTheme
                                  platform={Platform.OS === 'ios' ? 'ios' : 'android'}
                                  clearIcon={this.state.clear_icon}
                                  containerStyle={{ width: WIDTH * 0.8, borderColor: '#f2f2f2' }}
                                  inputStyle={{ fontSize: 16, backgroundColor: '#FFFFFF' }}
                                  searchIcon={{ size: 36, color: '#CD5C5C' }}
                                  returnKeyType={'done'}
                                  value={this.state.search_string}
                                  onChangeText={this.handleChangeText.bind(this)}
                                  onSubmitEditing={() => this.handleSeachPoducts()}
                                  placeholder="Search by title or author"
                                />
                                <TouchableOpacity
                                  onPress={() => (store.show_scanner = true)}
                                  hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
                                >
                                  <Icon
                                    containerStyle={{ marginRight: 5 }}
                                    name="camera"
                                    type="simple-line-icon"
                                    size={28}
                                    color="#CD5C5C"
                                  />
                                </TouchableOpacity>
                              </View>
                              <View
                                style={{
                                  flexDirection: 'row',
                                  justifyContent: 'space-between',
                                  alignItems: 'center',
                                  marginBottom: 5,
                                  backgroundColor: 'white',
                                }}
                              >
                                <TouchableOpacity
                                  onPress={() => {
                                    let grid_view = this.state.gridview ? false : true
                                    this.setState({ gridview: grid_view })
                                  }}
                                  hitSlop={{ top: 20, bottom: 20, left: 30, right: 40 }}
                                >
                                  {this.state.gridview ? (
                                    <Icon
                                      containerStyle={{ padding: 5, marginLeft: 5 }}
                                      name="ios-list"
                                      type="ionicon"
                                      size={28}
                                      color="black"
                                    />
                                  ) : (
                                      <Icon
                                        containerStyle={{ padding: 12 }}
                                        name="grid"
                                        type="simple-line-icon"
                                        size={15}
                                        color="black"
                                      />
                                    )}
                                </TouchableOpacity>
                                {store.show_results ? <Text style={{ fontSize: 13 }}>{this.state.products.length} books showing</Text> :
                                  <Text style={{ fontSize: 13 }}>{store.items.length} books showing</Text>}
                                <Text style={{ fontSize: 13 }} />
                              </View>
                              <View style={{ flex: 10 }}>
                                <ScrollView>
                                  {store.show_results ? (
                                    <View style={styles.middle}>
                                      {this.state.products.map((item, i) => {
                                        return (
                                          <View key={i}>
                                            {this.state.gridview ? (
                                              <TouchableOpacity
                                                onPress={this.handleShowProductDetails.bind(this, item.id)}
                                                style={{
                                                  backgroundColor: 'white',
                                                  marginBottom: 6,
                                                  marginRight: i % 2 == 0 ? 6 : 0,
                                                  alignItems: 'center',
                                                  justifyContent: 'center',
                                                  width: (WIDTH - 30) / 2,
                                                  height: 280,
                                                  borderRightWidth: i % 2 == 0 ? 2 : 0,
                                                  borderRightColor: i % 2 == 0 ? '#F5F5F5' : 'white',
                                                }}
                                              >
                                                <View style={{ alignItems: 'center' }}>
                                                  <Image
                                                    style={{
                                                      width: 80,
                                                      height: 120,
                                                      padding: 5,
                                                      marginBottom: 20,
                                                    }}
                                                    source={{ uri: item.imageLinks }}
                                                  />
                                                  <Text style={{ padding: 3 }}>{item.title}</Text>
                                                  <Text style={{ color: '#808080', marginBottom: 8 }}>
                                                    by {item.authors}
                                                  </Text>
                                                  <Text
                                                    style={{
                                                      color: '#000000',
                                                      fontWeight: 'bold',
                                                      fontSize: 20,
                                                    }}
                                                  >
                                                    ${item.price}
                                                  </Text>
                                                </View>
                                              </TouchableOpacity>
                                            ) : (
                                                <TouchableOpacity
                                                  onPress={this.handleShowProductDetails.bind(this, item.id)}
                                                  style={styles.row}
                                                >
                                                  <Image
                                                    style={{
                                                      width: 80,
                                                      height: 120,
                                                      marginRight: 10,
                                                      borderRadius: 5,
                                                    }}
                                                    source={{ uri: item.imageLinks }}
                                                  />
                                                  <View style={{ width: WIDTH - 120 }}>
                                                    <Text style={{ marginBottom: 3 }}>{item.title}</Text>
                                                    <Text style={{ color: '#808080', marginBottom: 8 }}>
                                                      by {item.authors}
                                                    </Text>
                                                    <Text
                                                      style={{
                                                        color: '#000000',
                                                        fontWeight: 'bold',
                                                        fontSize: 20,
                                                      }}
                                                    >
                                                      ${item.price}
                                                    </Text>
                                                  </View>
                                                </TouchableOpacity>
                                              )}
                                          </View>
                                        )
                                      })}
                                    </View>
                                  ) : (
                                      <View style={styles.middle}>
                                        {store.items.map((item, i) => {
                                          return (
                                            <View key={i}>
                                              {this.state.gridview ? (
                                                <TouchableOpacity
                                                  onPress={this.handleShowProductDetails.bind(this, item.id)}
                                                  style={{
                                                    backgroundColor: 'white',
                                                    marginBottom: 6,
                                                    marginRight: i % 2 == 0 ? 6 : 0,
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    width: (WIDTH - 30) / 2,
                                                    height: 280,
                                                    borderRightWidth: i % 2 == 0 ? 2 : 0,
                                                    borderRightColor: i % 2 == 0 ? '#F5F5F5' : 'white',
                                                  }}
                                                >
                                                  <View style={{ alignItems: 'center' }}>
                                                    <Image
                                                      style={{
                                                        width: 80,
                                                        height: 120,
                                                        padding: 5,
                                                        marginBottom: 20,
                                                      }}
                                                      source={{ uri: item.imageLinks }}
                                                    />
                                                    <Text style={{ padding: 3 }}>{item.title}</Text>
                                                    <Text style={{ color: '#808080', marginBottom: 8 }}>
                                                      by {item.authors}
                                                    </Text>
                                                    <Text
                                                      style={{
                                                        color: '#000000',
                                                        fontWeight: 'bold',
                                                        fontSize: 20,
                                                      }}
                                                    >
                                                      ${item.price}
                                                    </Text>
                                                  </View>
                                                </TouchableOpacity>
                                              ) : (
                                                  <TouchableOpacity
                                                    onPress={this.handleShowProductDetails.bind(this, item.id)}
                                                    style={styles.row}
                                                  >
                                                    <Image
                                                      style={{
                                                        width: 80,
                                                        height: 120,
                                                        marginRight: 10,
                                                        borderRadius: 5,
                                                      }}
                                                      source={{ uri: item.imageLinks }}
                                                    />
                                                    <View style={{ width: WIDTH - 120 }}>
                                                      <Text style={{ marginBottom: 3 }}>{item.title}</Text>
                                                      <Text style={{ color: '#808080', marginBottom: 8 }}>
                                                        by {item.authors}
                                                      </Text>
                                                      <Text
                                                        style={{
                                                          color: '#000000',
                                                          fontWeight: 'bold',
                                                          fontSize: 20,
                                                        }}
                                                      >
                                                        ${item.price}
                                                      </Text>
                                                    </View>
                                                  </TouchableOpacity>
                                                )}
                                            </View>
                                          )
                                        })}
                                      </View>
                                    )}
                                </ScrollView>
                              </View>
                            </View>
                            {store.show_menu ? (
                              <TouchableWithoutFeedback
                                onPress={() => {
                                  store.show_menu = false
                                }}
                              >
                                <View
                                  style={[
                                    styles.overlay,
                                    { backgroundColor: 'rgba(52, 52, 52, 0.8)', marginTop: 60 },
                                  ]}
                                />
                              </TouchableWithoutFeedback>
                            ) : null}
                            {store.show_menu ? <SideMenu /> : null}
                          </View>
                        </View>
                      )}
                  </View>
                )}
            </View>
          )}
      </View>
    )
  }
}
