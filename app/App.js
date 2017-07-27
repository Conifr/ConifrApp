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

import Banner from './Banner';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons style={styles.icon}
        name="home"
        size={32}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Banner text={'Home'} navigation={this.props.navigation}/>
      </View>
    );
  }
}

class SettingsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Settings',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons style={styles.icon}
        name="settings"
        size={32}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Banner text={'Settings'} navigation={this.props.navigation}/>
      </View>
    );
  }
}

const ConifrApp = DrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Notifications: {
      screen: SettingsScreen,
    },
  },
  {
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);


export default () => <ConifrApp />;


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
