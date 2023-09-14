import React, {useEffect, useMemo, useState} from 'react';
import {Collapse} from '~/components';
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2';
import getRampAlgorithms, {RampData} from '~/utils/getRampAlgorithms';
import {throttle} from '~/utils/throttle';

ChartJS.register(ArcElement, Tooltip, Legend);

export const RampChart = () => {
  const [rampData, setRampData] = useState<number[]>([]);

  const getRampData = throttle((data: RampData[]) => {
    const rampTotals = data.reduce(
      (acc, curr) => {
        acc[curr.algorithm] = acc[curr.algorithm] + 1;
        return acc;
      },
      {
        'Algorithm 1': 0,
        'Algorithm 2': 0,
        'Algorithm 3': 0,
        'Algorithm 4': 0,
        'Algorithm 5': 0,
      }
    );
    const chartData = Object.values(rampTotals);
    setRampData(chartData);
  }, 5000);

  useEffect(() => {
    getRampAlgorithms(getRampData);
  }, []);

  const ramps = useMemo(() => rampData, [rampData]);

  return (
    <Collapse title="Ramp Chart">
      <div className="p-2">
        <Doughnut
          height={180}
          width={180}
          options={{maintainAspectRatio: false, cutout: '70%'}}
          data={{
            datasets: [
              {
                data: ramps,
                borderColor: 'transparent',
                backgroundColor: [
                  '#ccfbf1',
                  '#5eead4',
                  '#14b8a6',
                  '#0f766e',
                  '#134e4a',
                ],
              },
            ],
          }}
        />
      </div>
    </Collapse>
  );
};
