import React from 'react';
import {Text, View} from 'react-native';

const CardSection = (props) => {

    return (
        <View style={styles.containerStyle}>
            {props.children}
        </View>
    );
};

const styles = {
    containerStyle: {
        borderColor: '#DDD',
        borderBottomWidth: 1,
        padding: 5,
        justifyContent: 'flex-start',
        flexDirection:'row',
        position:'relative',
        backgroundColor:'#FFFF'

    }
};
export { CardSection };