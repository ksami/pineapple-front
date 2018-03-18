import React from 'react';
import { View, StyleSheet } from 'react-native';

import BlackKey from './components/BlackKey';
import WhiteKey from './components/WhiteKey';

export default class Piano extends React.Component {
    render() {
        return (
          <View style={styles.container}>
            <WhiteKey />
            <BlackKey />
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex: 0.6,
        flexDirection: 'row',
        alignItems: 'stretch'
    }
})