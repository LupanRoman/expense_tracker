import Balance from '@/components/Dashboard/Balance';
import MonthlyExpenses from '@/components/Dashboard/MonthlyExpenses';
import TopExpenses from '@/components/Dashboard/TopExpenses';
import TopBar from '@/components/TopBar';
import React from 'react';

const Dashboard = () => {
  /* Here I will render all the elements for the dashboard and so on for the rest on the screens */
  return (
    <>
      <div>
        <TopBar />
        <Balance />
        <MonthlyExpenses />
        <TopExpenses />
      </div>
    </>
  );
};

export default Dashboard;
