import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import SocketIOClient from 'socket.io-client';


export default class ProfPage extends Component {

	constructor(props) {
	    super(props);
	    this.socket = SocketIOClient('http://192.168.0.112:3000');
	    console.log(this.socket);
	    this.state = {}; 
	    this.state.prof = {'iit2015089@iiita.ac.in': ['first ping', '2nd ping'], 'iit2015088@iiita.ac.in': ['no pings']}
	    //const userInfo = this.props.navigation.getParam('user', 'NO-ID');
	    //console.log("%%% " + userInfo.email)
	    //let prof = Object.assign({}, this.state.prof);    //creating copy of object
		//prof[userInfo.email] = ['one new ping'];                        //updating value
		//this.setState({prof});
  	}

	render() {
		const userInfo = this.props.navigation.getParam('user', 'NO-ID');
		var pings = this.state.prof[userInfo.email]
		console.log('$$$ ' + pings[0])
		buttonsListArr = [];
		for (let i = 0; i < pings.length; i++) 
		{
			console.log("federer")
 			buttonsListArr.push(<Button  onPress={() => {
            	console.log("going to login");
          	}}
          	title={pings[i]}/>);
		}
		return(
			<View>
				<Text>Welcome</Text>
				{buttonsListArr}
			</View>
		)
	}
}