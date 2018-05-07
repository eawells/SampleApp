import React, { Component } from 'react';
import {
  StyleSheet,
  StatusBar,
  Text,
  View
} from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={[styles.defaultText,styles.coolText]}>Cool dude</Text>
        <Text style={[styles.defaultText,styles.happyText]}>Happy dude</Text>
        <Text style={[styles.defaultText,styles.sadText]}>Sad dude</Text>
        <View style={styles.container}>
        <Text style={[styles.defaultText, styles.image]}>[Insert Image]</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'space-around',
    backgroundColor: 'blueviolet'
  },
  defaultText: {
    textAlign: 'center',
    fontSize: 20,
    padding: 10,
    margin: 5,
    borderWidth: StyleSheet.hairlineWidth,
    color: 'black'
  },
  happyText: {
    alignSelf: 'flex-end',
    backgroundColor: 'yellow',
    color: 'black',
    fontWeight: 'bold'
  },
  coolText: {
    backgroundColor: 'cyan',
    color: 'blue'
  },
  sadText: {
    backgroundColor: 'black',
    color: 'cyan'
  },
  image: {
    flexDirection: 'row',
    backgroundColor: 'white',
  }
})
