import firebase from 'firebase';
import React, { Component} from 'react';
import {View} from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount(){
        firebase.initializeApp({
            apiKey: 'AIzaSyCaSu6aDWh9P_CunQ2Nbj4EzW5QpG3gTU8',
            authDomain: 'authentication-76b53.firebaseapp.com',
            databaseURL: 'https://authentication-76b53.firebaseio.com',
            projectId: 'authentication-76b53',
            storageBucket: 'authentication-76b53.appspot.com',
            messagingSenderId: '653455678656'
        });
    }

    render(){
        return (
          <View>
              <Header headerText="Authentication"/>
              <LoginForm/>
          </View>
        );
    }
}

export default App ;