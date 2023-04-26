import React, { ReactNode } from 'react';
import TopBar from '../TopBar';
import Menu from '../Menu';

type DashboardLayout = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: DashboardLayout) => {
  return (
    <div className="px-5 pt-5 lg:px-16 xl:px-20 3xl:px-96">
      <TopBar />
      <div className="flex gap-10 md:pr-16">
        <div
          id="menu-container"
          className="menu-container absolute top-5 md:static"
        >
          <Menu />
        </div>
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
