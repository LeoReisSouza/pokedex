import React from 'react';
import { View, StyleSheet } from 'react-native';
import Pokedex from './src/Pokedex';

export default function App() {
  return (
    <View style={styles.container}>
      <Pokedex />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    paddingTop: 40,
  },
});
