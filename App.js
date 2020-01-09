import React, {Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {Provider} from 'react-redux';
import store from './src/public/redux/store';
// screens
import BottomNavbar from './src/screens/BottomNavbar';
import Home from './src/screens/Home';
import Wishlist from './src/screens/Wishlist';
import Cart from './src/screens/Cart';
import Profile from './src/screens/Profile';
import Sort from './src/screens/Sort';
import Filter from './src/screens/Filter';
import Product from './src/screens/Product';
import Start from './src/screens/Start';
import Login from './src/screens/Login';
import Register from './src/screens/SignUp';
import EditPhotoUser from './src/screens/EditPhotoUser';
import AddProduct from './src/screens/AddProduct';

const AppNavigator = createStackNavigator(
  {
    Start: {
      screen: Start,
    },
    Login: {
      screen: Login,
    },
    Register: {
      screen: Register,
    },
    EditPhotoUser: {
      screen: EditPhotoUser,
    },
    BottomNavbar: {
      screen: BottomNavbar,
    },
    Home: {
      screen: Home,
    },
    Wishlist: {
      screen: Wishlist,
    },
    Cart: {
      screen: Cart,
    },
    Profile: {
      screen: Profile,
    },
    Sort: {
      screen: Sort,
    },
    Filter: {
      screen: Filter,
    },
    Product: {
      screen: Product,
    },
    AddProduct: {
      screen: AddProduct,
    },
  },
  {
    headerMode: 'none',
    navigationOptions: {
      headerVisible: false,
    },
  },
);

const AppContainer = createAppContainer(AppNavigator);

// wrap all component with redux Provider and the store
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    );
  }
}
