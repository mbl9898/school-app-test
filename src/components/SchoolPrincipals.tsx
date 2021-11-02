import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const SchoolPrincipals = () => {
  const principals = ['Mr: Tahir Sahb', 'Miss: Sana', 'Miss: Asia'];
  return (
    <>
      <div>
        <h5 className="text-center app-green font-medium mb-4">
          Your School Principals
        </h5>
        <div className="p-4 bg-white min-w-full rounded-3xl ring-4 ring-gray-300 ring-opacity-20 shadow-xl app-h-plsp">
          {principals.map((principal) => (
            <div className="flex items-center p-4" key={uuidv4()}>
              <img
                src="./Screenshot 2021-11-03 002736.png"
                alt="icon"
                height="80"
                width="80"
              />
              <span className="px-5 font-medium text-gray-500">
                {principal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SchoolPrincipals;
