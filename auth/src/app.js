import firebase from 'firebase';
import React, { Component} from 'react';
import {View} from 'react-native';
import { Header,Button,CardSection,Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {

    state = {loggedIn: null};

    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyCaSu6aDWh9P_CunQ2Nbj4EzW5QpG3gTU8',
            authDomain: 'authentication-76b53.firebaseapp.com',
            databaseURL: 'https://authentication-76b53.firebaseio.com',
            projectId: 'authentication-76b53',
            storageBucket: 'authentication-76b53.appspot.com',
            messagingSenderId: '653455678656'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });

    }

    renderContent() {

        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return (<View style={{flex: 1}}><Spinner size="large"/></View>);
        }
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}
const styles = {
    content: {
        padding: 100
    }
};
export default App ;