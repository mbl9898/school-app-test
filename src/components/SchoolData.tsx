import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import CountUp from 'react-countup';

const SchoolData = () => {
  const schoolData = [
    {
      title: 'Student',
      count: 2132,
    },
    {
      title: 'Classes',
      count: 200,
    },
    {
      title: 'Teacher',
      count: 150,
    },
  ];
  const expRevProf = [
    {
      title: 'Your Expense',
      count: 5145665,
    },
    {
      title: 'Your Revenue',
      count: 125412455,
    },
    {
      title: 'Your Profit',
      count: 42456534,
    },
  ];

  return (
    <>
      <div className="flex justify-center m-2">
        {schoolData.map(({ title, count }) => (
          <div
            className="flex flex-col text-center font-medium bg-white p-5 app-green m-3 rounded-3xl ring-4 ring-gray-300 ring-opacity-20 shadow-xl"
            key={uuidv4()}
          >
            <span className="mb-4">{title}</span>
            <span>
              <CountUp delay={0.5} duration={2} end={count} />
            </span>
          </div>
        ))}
      </div>
      <div className="flex justify-center m-2">
        {expRevProf.map(({ title, count }) => (
          <div
            className="flex flex-col text-center font-medium bg-app-green p-5 text-white m-3 rounded-3xl ring-4 ring-gray-300 ring-opacity-20 shadow-xl"
            key={uuidv4()}
          >
            <span className="mb-4">{title}</span>
            <span>
              <CountUp delay={0.5} duration={2} end={count} />
            </span>
          </div>
        ))}
      </div>
    </>
  );
};

export default SchoolData;
