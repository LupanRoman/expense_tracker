import IncomeAmount from '@/components/Income/IncomeAmount';
import IncomeGraph from '@/components/Income/IncomeGraph';
import IncomeType from '@/components/Income/IncomeType';
import MainLayout from '@/components/layouts/MainLayout';
import React from 'react';

const Income = () => {
  return (
    <>
    <div>
      <IncomeAmount />
      <IncomeGraph />
      <IncomeType />
    </div>
    </>
  );
};

Income.Layout = MainLayout;

export default Income;
