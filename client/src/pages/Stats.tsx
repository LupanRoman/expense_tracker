import Balance from '@/components/Dashboard/Balance';
import ExpenseMonth from '@/components/Statistics/ExpenseMonth';
import StatsGraph from '@/components/Statistics/StatsGraph';
import MainLayout from '@/components/layouts/MainLayout';
import React from 'react';

const Stats = () => {
  return (
    <>
      <div>
        <Balance />
        <StatsGraph />
        <ExpenseMonth />
      </div>
    </>
  );
};

Stats.Layout = MainLayout;

export default Stats;
