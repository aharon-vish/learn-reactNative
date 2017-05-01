import React , {Component} from 'react';
import  ReduxThunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
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
        const store = createStore(reducers,{},applyMiddleware(ReduxThunk));
        return (
            <Provider store={store}>
                <LoginForm/>
            </Provider>
        );
    }
}

export default App;

