
import React from 'react';

import { Image, Platform, StyleSheet, Text, View, Button, TouchableHighlight } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const Banner = ({text, navigation}) => (
  <View style={styles.banner}>
    <Text style={styles.title}>{text}</Text>
      <View style={styles.menu_container}>
        <MaterialIcons
          onPress={() => navigation.navigate('DrawerOpen')}
          name="menu"
          size={32}
          color="white"
        />
      </View>
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#4FC866',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    paddingTop: Platform.OS === 'ios' ? 24 : 14,
    paddingBottom: 12
  },
  image: {
    width: 36,
    height: 36,
    resizeMode: 'contain',
    tintColor: '#fff',
    margin: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '400',
    width: '100%',
    color: '#fff',
    margin: 0,
    textAlign: 'center',
    textAlignVertical: 'center',
    alignItems: 'center'
  },
  menu_icon: {
    position: 'absolute',
    padding: 0,
    marginTop: Platform.OS === 'ios' ? 8 : 0,
    left: 14,
    right: 'auto',
    paddingTop: 7
  },
  menu_container: {
    height: '100%',
    width: 32,
    position: 'absolute',
    padding: 0,
    marginTop: Platform.OS === 'ios' ? 8 : 0,
    left: 14,
    right: 'auto',
    paddingTop: 2
  }
});
