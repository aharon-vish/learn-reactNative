import React , {Component} from 'react';
import {View , Text} from 'react-native';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        // Initialize Firebase
        var config = {
            apiKey: 'AIzaSyAJo8tlsTEDEefOsBlfe4C0DLCuycchopk',
            authDomain: 'manager-ea954.firebaseapp.com',
            databaseURL: 'https://manager-ea954.firebaseio.com',
            projectId: 'manager-ea954',
            storageBucket: 'manager-ea954.appspot.com',
            messagingSenderId: '903639880853'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers)}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;

