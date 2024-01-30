import React from 'react';
import { View, Dimensions, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { CandlestickChart } from 'react-native-wagmi-charts';

import { INTERVAL_CHART } from '../../Constants';
import styles from './Chart.component.styles';

import type { IntervalChartModel, ChartProps, ButtonIntervalProps } from './Chart.component.types';

const ButtonInterval = ({ interval, id, handleIntervalChartChange }: ButtonIntervalProps & ChartProps) => {
  const isActive = interval === id;

  const handlePress = () => handleIntervalChartChange(id);

  return (
    <TouchableOpacity
      style={[styles.buttonInterval, isActive && styles.buttonColorActive]}
      onPress={handlePress}
    >
      <Text style={{ fontSize: 12, color: isActive ? 'white' : 'black' }}>{id}</Text>
    </TouchableOpacity>
  );
};

const Chart = (props: ChartProps) => {
  return (
    <GestureHandlerRootView>
      <View style={styles.containerChart}>
        <CandlestickChart height={250} width={Dimensions.get('window').width - 20}>
          <CandlestickChart.Candles />
          <CandlestickChart.Tooltip style={styles.toolTip} />
          <CandlestickChart.Crosshair />
        </CandlestickChart>
      </View>
      <View style={styles.containerButtonIntervals}>
        {Object.values(INTERVAL_CHART).map((id: IntervalChartModel) => (
          <ButtonInterval key={id} id={id} {...props} />
        ))}
      </View>
    </GestureHandlerRootView>
  );
};

Chart.displayName = 'Chart';

export default Chart;
