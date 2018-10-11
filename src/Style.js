import { StyleSheet, Platform, Dimensions } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f2f2f2',
  },
  align: {
    flex: 1,
    marginRight: 10,
    marginLeft: 10,
  },
  header: {
    marginTop: Platform.OS === 'ios' ? 30 : 20,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 0.5,
    borderBottomColor: '#DCDCDC',
  },
  middle: {
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  font: {
    fontSize: 18,
  },
  row: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
    padding: 10,
  },
  badge: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? -10 : 0,
    right: Platform.OS === 'ios' ? 2 : 11,
    width: 17,
    height: 19,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#CD5C5C',
  },
  footer: {
    marginTop: 5,
    marginBottom: 5,
  },
  menu_container: {
    flex: 1,
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  menu: {
    flex: 1,
    backgroundColor: '#FFF',
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width * 0.7,
    height: Dimensions.get('window').height,
    marginTop: 60,
  },
  overlay: {
    position: 'absolute',
    left: 0,
    top: 0,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  menu_item: {
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C0C0C0',
  },
})
