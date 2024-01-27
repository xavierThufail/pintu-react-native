import React from 'react';
import { StyleSheet, Text, View , StatusBar} from 'react-native';

import { Header } from './src/Components';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar />
      <Header currencyName='Bitcoin' price="Rp 1.000.000.000" percentage="10" />
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    margin: 0,
    position: 'relative',
  },
});
