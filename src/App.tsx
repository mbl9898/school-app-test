import React from 'react';
import SideBar from './components/SideBar';
import Dashboard from './components/Dashboard';

const App = () => {
  return (
    <>
      <div className="relative min-h-screen flex">
        <SideBar />
        <Dashboard />
      </div>
    </>
  );
};

export default App;
