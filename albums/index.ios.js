import React from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Header from './src/components/header';

const App = () => (
    <Header/>
);

AppRegistry.registerComponent('albums', () => App);
