import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableOpacity, Text, AppRegistry } from 'react-native';

import ConifrApp from '../App';

export default class LoginForm extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.googleLoginBtnContainer}
          onPress={() =>
            {
              return navigate('Home');
            }
          }>
          <Image
            style={styles.googleLoginBtn}
            source={require('../assets/google_signin_buttons/web/2x/btn_google_signin_light_normal_web.png')}
          />
        </TouchableOpacity>
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
  },
  googleLoginBtnContainer: {
    height: 66,
    width: 275,
    opacity: 0.9
  },
  googleLoginBtn: {
    height: 66,
    width: 275,
  }
});
