import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Button, Alert, ScrollView} from 'react-native';
import SocketIOClient from 'socket.io-client';
import { createStackNavigator } from 'react-navigation';
import Home from './app/components/Home';
import Login from './app/components/Login';
import ProfPage from './app/components/ProfPage';
import StudentPage from './app/components/StudentPage'

class App extends Component{
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
    flex: 1,
  },
});

export default createStackNavigator({
  home: Home,
  login: Login,
  profPage: ProfPage,
  studentPage: StudentPage
})
