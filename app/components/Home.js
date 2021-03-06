import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import Banner from './Banner';
import CustomTabs from './HomeTabs';

export default class HomeScreen extends Component {
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
        <CustomTabs />
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
