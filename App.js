import React from 'react';
import { View, StyleSheet } from 'react-native';

import Piano from './src/Piano.js';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Piano />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
