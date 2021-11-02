import React from 'react';
import NavLink from './NavLink';
import { v4 as uuidv4 } from 'uuid';

const SideBar = () => {
  const sideBarLinks = [
    {
      name: 'Dashboard',
      iconLink: './Screenshot 2021-11-02 190619.png',
    },
    {
      name: 'Profile',
      iconLink: './Screenshot 2021-11-02 190619.png',
    },
    {
      name: 'Principal Verification',
      iconLink: './Screenshot 2021-11-02 193618.png',
    },
    {
      name: 'DDC Azm Shaoor',
      iconLink: './Screenshot 2021-11-02 193618.png',
    },
    {
      name: 'FCC Azm Shaoor',
      iconLink: './Screenshot 2021-11-02 193618.png',
    },
  ];
  return (
    <>
      <div className="w-1/4 border-3 border-gray-200 text-gray-500 text-2xl">
        <div className="border-b-4 border-gray-200">
          <img src="./Screenshot 2021-11-02 185921.png" alt="logo" />
        </div>
        <nav className="border-b-4 border-gray-200">
          {sideBarLinks.map((link) => (
            <NavLink name={link.name} src={link.iconLink} key={uuidv4()} />
          ))}
        </nav>
        <div className="flex flex-col items-center justify-center px-5 py-3 font-medium text-center">
          <span>Logged In as: Renaissance Pakistan</span>
          <button className="bg-gray-300 my-3 p-3 w-32 justify-self-center rounded-xl shadow-lg border-b-2 border-gray-300 font-semibold text-black hover:bg-green-600">
            Logout
          </button>
        </div>
      </div>
    </>
  );
};

export default SideBar;
