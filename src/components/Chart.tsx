import React from 'react';
import { ChartData } from 'chart.js';
import { Bar } from 'react-chartjs-2';

interface Props {
  title: string;
  data:
    | ChartData<'bar', number[], unknown>
    | ((canvas: HTMLCanvasElement) => ChartData<'bar', number[], unknown>);
  options: any;
}

const Chart = ({ title, data, options }: Props) => {
  return (
    <>
      <div className="mr-4">
        <h5 className="text-center app-green font-medium mb-4">{title}</h5>
        <div className="flex items-center p-5 bg-white min-w-full rounded-3xl ring-4 ring-gray-300 ring-opacity-20 shadow-xl app-h-plsp">
          <Bar data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default Chart;
