import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import SocketIOClient from 'socket.io-client';


export default class ProfPage extends Component {

	render() {
		
		return(
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
		)
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