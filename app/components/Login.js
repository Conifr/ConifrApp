import React, { Component } from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';

import LoginForm from './LoginForm';
import NullComponent from './Null';

export default class Login extends Component {
  static navigationOptions = {
    drawerLabel: <NullComponent />
  };

  render(){
    return (
      <View style={styles.container}>
        <View style={styles.logoContainer}>
            <Image
              style={styles.logo}
              source={require('../assets/cropped-Conifr-Logo-No-Text-nobkg.png')}
            />
            <Text style={styles.logoTitle}>Bringing Carbon to its Roots</Text>
        </View>
        <View style={styles.loginContainer}>
          <LoginForm navigation={this.props.navigation}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ECF0F1'
  },
  logoContainer: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center'
  },
  logo: {
    width: 150,
    height: 150
  },
  logoTitle: {
    marginTop: 20,
    width: 250,
    textAlign: 'center',
    opacity: 0.7,
    fontWeight: '400',
    fontSize: 18,
  },
  loginContainer: {
    padding: 20,
    paddingTop: 60,
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
  }
});
