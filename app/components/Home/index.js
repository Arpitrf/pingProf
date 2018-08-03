import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style = {styles.buttonContainer}>
        <Button
          onPress={() => {
            console.log("going to login");
            this.props.navigation.navigate('login', {whoIsIt : 'student'})
          }}
          title="Student"
        />
        </View>
        <View style = {styles.buttonContainer}>
        <Button
          onPress={() => {
            console.log("going to login");
            this.props.navigation.navigate('login', {whoIsIt : 'prof'})
          }}
          title="Professor"
        />
        </View>
      </View>
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