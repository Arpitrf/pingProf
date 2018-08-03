import React, {Component} from 'react';
import {StyleSheet, Text, View, Button, Alert} from 'react-native';
import { GoogleSignin, GoogleSigninButton } from 'react-native-google-signin';

export default class Login extends Component {

	componentDidMount() {
		GoogleSignin.hasPlayServices({ autoResolve: true })
		  .then(() => {
		    // play services are available. can now configure library
		  })
		  .catch(err => {
		    console.log('Play services error', err.code, err.message);
		  });
		GoogleSignin.configure({
		  scopes: ['https://www.googleapis.com/auth/drive.readonly'], // what API you want to access on behalf of the user, default is email and profile
		  //iosClientId: '<FROM DEVELOPER CONSOLE>', // only for iOS
		  webClientId: '60407402795-9f334c9m21cu10c3l3icpsi8e44kqa4k.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
		  //offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
		  //hostedDomain: '', // specifies a hosted domain restriction
		  //forceConsentPrompt: true, // [Android] if you want to show the authorization prompt at each login
		  //accountName: '', // [Android] specifies an account name on the device that should be used
		}).then(() => {
		  // you can now call currentUserAsync()
		});
	}

	handle() {
		const whoIsIt = this.props.navigation.getParam('whoIsIt', 'NO-ID');
		console.log("in hereeeeeeeeeeeee");
		GoogleSignin.signIn()
			.then((user) => {
				console.log(user);
				this.setState({user : user});
				if(whoIsIt == 'prof') {
					console.log("in prof condition")
					this.props.navigation.navigate('profPage', {user: user});
				}
				else {
					console.log("in student condition")
					this.props.navigation.navigate('studentPage', {user: user});
				}
			})
		  	.catch((err) => {
		  		console.log("Wrong signin" + err);
		  	})
		  	.done();
		
	}

	render() {
		return(
		  <GoogleSigninButton
		    style={{ width: 48, height: 48 }}
		    size={GoogleSigninButton.Size.Icon}
		    color={GoogleSigninButton.Color.Dark}
		    onPress={this.handle.bind(this)}/>
		);
	}
}