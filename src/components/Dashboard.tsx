import React from 'react';
import SchoolCard from './SchoolCard';
import SchoolPrincipals from './SchoolPrincipals';
import SchoolData from './SchoolData';
import { v4 as uuidv4 } from 'uuid';
import Chart from './Chart';
import { data, options } from '../helpers/profitLoss';

const Dashboard = () => {
  const schools = [
    {
      name: 'DDC Azm Shaoor',
      id: 1577337845428,
    },
    {
      name: 'FCC Azm Shaoor',
      id: 1577337845429,
    },
    {
      name: 'Azme Shaoor Marir',
      id: 1577337845430,
    },
  ];

  return (
    <>
      <div className="flex-1 p-10 text-2xl bg-gray-100">
        <button className="bg-app-green p-2 font-semibold text-white hover:bg-green-600">
          Add School
        </button>
        <div className="flex my-4 text-white font-semibold">
          {schools.map(({ id, name }) => (
            <SchoolCard id={id} name={name} key={uuidv4()} />
          ))}
        </div>
        <div className="grid grid-cols-2 grid-rows-1 grid-flow-row gap-1">
          <Chart
            title={'Check your profit loss'}
            data={data}
            options={options}
          />
          <SchoolPrincipals />
        </div>
        <SchoolData />
        <div className="grid grid-cols-2 grid-rows-1 grid-flow-row gap-1">
          <Chart
            title={'Check your profit loss'}
            data={data}
            options={options}
          />
          <Chart title={'Monthly Expense'} data={data} options={options} />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
