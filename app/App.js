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

import Banner from './Banner';

class HomeScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Home',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/chats-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Banner text={'Conifr'} />
        <Button
           onPress={() => this.props.navigation.navigate('DrawerOpen')}
           title="Open drawer"
         />
      </View>
    );
  }
}

class NotificationsScreen extends React.Component {
  static navigationOptions = {
    drawerLabel: 'Notifications',
    drawerIcon: ({ tintColor }) => (
      <Image
        source={require('./assets/notif-icon.png')}
        style={[styles.icon, {tintColor: tintColor}]}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Banner text={'Notifications'} />
        <Button
           onPress={() => this.props.navigation.navigate('DrawerOpen')}
           title="Open drawer"
         />
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
      screen: NotificationsScreen,
    },
  },
  {
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
  }
);


export default () => <ConifrApp />;

/*export default class ConifrApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native!
        </Text>
        <Text style={styles.instructions}>
          Double tap R on your keyboard to reload,{'\n'}
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}*/

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
    width: 24,
    height: 24,
  },
  item: {
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ddd',
  }
});
