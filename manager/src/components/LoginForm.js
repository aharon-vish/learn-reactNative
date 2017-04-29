import React,{Component} from 'react';
import {Text, View,TextInput} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged} from '../actions';
import {Button, Card, CardSection ,Input, Spinner}from './common';

class LoginForm extends Component {
    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label='Email'
                        onChangeText={this.onEmailChanged.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label='Password'
                    />
                </CardSection>
                <CardSection>
                    <Button>Log In</Button>
                </CardSection>
            </Card>
        );
    }
}
export default connect(null,{emailChanged})(LoginForm);
