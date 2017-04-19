import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';
import Header from './src/components/Header';
import AlbumList from './src/components/AlbumList';

const App = () => (
    <View style={{ flex:1}}>
        <Header headerText={'Album!'}/>
        <AlbumList/>
    </View>
);

AppRegistry.registerComponent('albums', () => App);
