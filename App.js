import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';

const styles = StyleSheet.create({
  defaultText: {
    fontSize: 22,
    padding: 10,
    margin: 5,
    borderWidth: 1,
    color: 'black'
  }
})

export default class App extends React.Component {
  render() {
    return (
      <View>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Cool dude</Text>
        <Text style={styles.defaultText}>Happy dude</Text>
        <Text style={styles.defaultText}>Sad dude</Text>
      </View>
    )
  }
}

