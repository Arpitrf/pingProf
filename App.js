/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, ScrollView} from 'react-native';

import SocketIOClient from 'socket.io-client';


// This must be below your `window.navigator` hack above


const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class ProfName extends Component {
  render() {
    return (
      <View style={styles.buttonContainer}>
        <Button
            onPress={() => {
              Alert.alert('You tapped the button!');

            }}
          title="Press Me"
        />
      </View>
      //<Text>Hello {this.props.name}!</Text>
    );
  }
}

export default class App extends Component{
  constructor(props) {
    super(props);
    this.socket = SocketIOClient('http://192.168.100.3:3000');
    console.log(this.socket);
  }
  render() {
    return (
      <ScrollView>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
              this.socket.emit("first", "Venkat");
            }}
            title="Vekat"
          />
        </View>
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              Alert.alert('You tapped the button!');
              this.socket.emit("first", "Kala");
            }}
            title="Dr. Kala"
          />
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  buttonContainer: {
    margin: 5,
  },
});
