import React from 'react';

interface Props {
  id: number;
  name: string;
}
const SchoolCard = ({ id, name }: Props) => {
  return (
    <>
      <div className="flex flex-col bg-app-green mr-5 px-4 py-10 rounded-3xl w-max shadow-lg">
        <span>{name}</span>
        <span className="flex">
          {id}
          <img
            src="./Screenshot 2021-11-02 201134.png"
            alt="icon"
            height="90"
            width="90"
          />
        </span>
      </div>
    </>
  );
};

export default SchoolCard;
