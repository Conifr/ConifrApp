import React, { Component } from 'react';

import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform,
  ScrollView,
  TouchableOpacity,
  Image,
  Button
} from 'react-native';

import { DrawerNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Banner from './components/Banner';
import Login from './components/Login';
import SettingsScreen from './components/Settings';
import HomeScreen from './components/Home';
import ProfileScreen from './components/Profile';
import RecordActivity from './components/RecordActivity';
import ManualActivity from './components/ManualActivity';

class App extends Component {

  render() {
    return (
      <ConifrApp />
    );
  }

}

const ConifrApp = DrawerNavigator(
  {
    Login: {
      screen: Login
    },
    Home: {
      screen: HomeScreen,
    },
    RecordActivity: {
      screen: RecordActivity,
    },
    ManualActivity: {
      screen: ManualActivity,
    },
    Profile: {
      screen: ProfileScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    initialRouteName: 'Login',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);


export default () => <App />;


const styles = StyleSheet.create({
  /*container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  text: {
    textAlign: 'center',
    color: '#333333',
    marginTop: 50,
  },
  view: {
    backgroundColor: '#e4ede4',
    flex: 1
  }*/
  container: {
    //marginTop: Platform.OS === 'ios' ? 10 : 0,
    flex: 1
  },
  icon: {
    width: 32,
    height: 32,
    padding: 0,
    margin: 0
  },
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  }
});
