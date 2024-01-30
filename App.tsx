import React from 'react';
import { StyleSheet, View , StatusBar as RNStatusBar, SafeAreaView } from 'react-native';
import { CandlestickChart } from 'react-native-wagmi-charts';

import { Header, Chart } from './src/Components';
import { useApp } from './useApp';

export default function App() {
  const { data, intervalChart, handleIntervalChartChange } = useApp();

  return (
    <CandlestickChart.Provider data={data}>
      <View style={styles.container}>
        <View style={styles.statusBar}>
          <SafeAreaView>
            <RNStatusBar translucent />
          </SafeAreaView>
        </View>
        <Header currencyName='Bitcoin' price="Rp 1.000.000.000" percentage="10" />
        <Chart interval={intervalChart} handleIntervalChartChange={handleIntervalChartChange} />
      </View>
    </CandlestickChart.Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 0,
    margin: 0,
    position: 'relative',
  },
  statusBar: {
    backgroundColor: 'red',
    height: RNStatusBar.currentHeight,
  }
});
