import { INTERVAL_CHART } from '../../Constants';

export type IntervalChartModel = keyof typeof INTERVAL_CHART;

export type ChartProps = {
  handleIntervalChartChange: (interval: IntervalChartModel) => void;
  interval: IntervalChartModel;
};

export type ButtonIntervalProps = {
  id: IntervalChartModel;
};
