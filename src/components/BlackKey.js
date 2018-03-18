import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class BlackKey extends React.Component {
    render() {
        return (
          <View style={styles.default} />
        );
      }
}

const styles = StyleSheet.create({
    default: {
        backgroundColor: '#000000',
        width: 50,
        height: 75
    }
})