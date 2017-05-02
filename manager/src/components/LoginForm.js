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

    onButtonPress() {
        const {email,password} = this.props;
        this.props.loginUser({email, password});
    }

    renderButton() {
        if (this.props.loading) {
            return <Spinner size="large"/>
        }
        return (<Button onPress={this.onButtonPress.bind(this)}>Log In</Button>);
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
                <Text style={styles.errorTextStyle}>{this.props.error}</Text>
                <CardSection>
                    {this.renderButton()}
                </CardSection>
            </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

const mapStateToProps = ({auth}) => {
    const {email,password,error,loading} = auth;
    return {email, password, error,loading};
};
export default connect(mapStateToProps, {emailChanged, passwordChanged, loginUser})(LoginForm);
