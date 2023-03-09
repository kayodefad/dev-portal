import React, { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';

const TabsLayout = () => {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col justify-between py-10 px-12 ">
      <div>
        <Outlet />
      </div>
      <BottomNav />
    </div>
  );
};

export default TabsLayout;
