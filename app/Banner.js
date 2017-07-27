
import React from 'react';

import { Image, Platform, StyleSheet, Text, View } from 'react-native';

const Banner = ({text}) => (
  <View style={styles.banner}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

export default Banner;

const styles = StyleSheet.create({
  banner: {
    backgroundColor: '#5fb141',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 14,
    paddingTop: Platform.OS === 'ios' ? 22 : 14,
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
});
