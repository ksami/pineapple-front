import React from 'react';
import { View, StyleSheet } from 'react-native';
import Dimensions from 'Dimensions';

export default class BlackKey extends React.Component {
    render() {
        return (
          <View style={styles.default} />
        );
    }
}

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#FFFFFF',
        width: 50,
        height: 150
    }
})