import React, { Component } from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';
import picCoolDude from './assets/coolDude.png';
import picSun from './assets/sun.png';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.sun} source={picSun}/>
        <Image style={styles.guy} source={picCoolDude}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  sun: {
    flex: 1,
    width: Dimensions.get('window').width,
    resizeMode: 'contain'
  },
  guy: {
    flex: 2,
    width: Dimensions.get('window').width,
    resizeMode: 'cover'
  }
})
