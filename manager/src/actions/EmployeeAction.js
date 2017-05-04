import {EMPLOYEE_UPDATE} from './types';
import firebase from 'firebase';
import { Actions } from 'react-native-router-flux';

export const employeeUpdate = ({prop, value})=> {
    return {
        type: EMPLOYEE_UPDATE,
        payload: {prop, value}
    };
};