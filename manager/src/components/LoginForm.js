import React,{Component} from 'react';
import {Text, View,TextInput} from 'react-native';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../actions';
import {Button, Card, CardSection ,Input, Spinner}from './common';

class LoginForm extends Component {
    onEmailChanged(text) {
        this.props.emailChanged(text);
    }

    onPasswordChanged(text) {
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        //debugger;
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }
    render() {
        return (
            <Card>
                <CardSection>
                    <Input
                        placeholder="user@gmail.com"
                        label='Email'
                        onChangeText={this.onEmailChanged.bind(this)}
                        value={this.props.email}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        secureTextEntry
                        placeholder="password"
                        label='Password'
                        onChangeText={this.onPasswordChanged.bind(this)}
                        value={this.props.password}
                    />
                </CardSection>
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>Log In</Button>
                </CardSection>
            </Card>
        );
    }
}

const mapStateToProps = state =>{
   return{
       email:state.auth.email,
       password:state.auth.password
   }
};
export default connect(mapStateToProps,{emailChanged,passwordChanged,loginUser})(LoginForm);
