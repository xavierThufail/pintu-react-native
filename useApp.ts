import React from 'react';

import { historyBTC } from './mock';
import type { IntervalChartModel } from './src/Components';

type CandleModel = {
  open: string;
  high: string;
  low: string;
  close: string;
  block: number;
  pair: string;
};

type Response = {
  status: number;
  data: CandleModel[];
};

const fetchHistory = () => new Promise<Response>((resolve, reject) => {
  setTimeout(() => {
    resolve({
      status: 200,
      data: historyBTC
    })
  }, 3000);
});

export const useApp = () => {
  const [history, setHistory] = React.useState<CandleModel[]>([]);
  const [intervalChart, setIntervalChart] = React.useState<IntervalChartModel>('1W');

  React.useEffect(() => {
    fetchHistory()
      .then((response) => {
        setHistory(response.data);
      });
  }, []);

  const getData = (value: any, index: number, array: any[]) => {
    const date = new Date(value.block * 1000);
    const minute = date.getMinutes();
  
    let plus = 0;
  
    if (minute >= 30 && minute < 55) {
      plus = Math.floor((55 - minute)/5);
    } else if (minute <= 25) {
      plus = Math.floor((25 - minute)/5);
    }
  
    const timeline = array.slice(index, index + plus + 1);
    const high = Math.max(...timeline.map((item: any) => Number(item.high)));
    const low = Math.min(...timeline.map((item: any) => Number(item.low)));
    const open = Number(timeline[0].open);
    const close = Number(timeline[timeline.length - 1].close);
  
    return {
      timestamp: value.block * 1000,
      open,
      high,
      low,
      close,
    };
  };

  const data = React.useMemo(() => {
    const mapHistory = history.reverse().reduce((result, value, index, array) => {
      const date = new Date(value.block * 1000);
      const minute = date.getMinutes();
    
      if (index === 0) {
        result.push(getData(value, index, array));
      } else if (minute === 30 || minute === 0) {
        result.push(getData(value, index, array));
      }
    
      return result;
    },[]);

    return mapHistory;
  }, [history]);

  const handleIntervalChartChange = (value: IntervalChartModel) => {
    setIntervalChart(value);
  };

  return {
    data,
    intervalChart,
    handleIntervalChartChange,
  };
};
