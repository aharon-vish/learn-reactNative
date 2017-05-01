import {EMAIL_CHANGED,PASSWORD_CHANGED} from './types';
import firebase from 'firebase';
export const emailChanged = (text)=> {
    return {
        type: EMAIL_CHANGED,
        payload: text
    }
};
export const passwordChanged = (text)=> {
    return {
        type: PASSWORD_CHANGED,
        payload: text
    }
};
export const loginUser = ({email, password})=> {
    debugger;
    return (dispatch)=> {
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user=> {
                dispatch({type: 'LOGIN_USER_LOGIN', payload: user});
            });
    };
};