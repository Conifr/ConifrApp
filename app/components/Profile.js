import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Banner from './Banner';

export default class ProfileScreen extends Component {
  static navigationOptions = {
    drawerLabel: 'Profile',
    drawerIcon: ({ tintColor }) => (
      <MaterialIcons style={styles.icon}
        name="person"
        size={32}
        color={tintColor}
      />
    ),
  };

  render() {
    return (
      <View style={styles.container}>
        <Banner text={'Profile'} navigation={this.props.navigation}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  icon: {
    width: 32,
    height: 32,
    padding: 0,
    margin: 0
  }
});
