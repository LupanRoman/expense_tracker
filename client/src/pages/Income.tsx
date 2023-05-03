import IncomeAmount from '@/components/Income/IncomeAmount';
import IncomeGraph from '@/components/Income/IncomeGraph';
import IncomeType from '@/components/Income/IncomeType';
import IncomeModal from '@/components/Modals/IncomeModal';
import MainLayout from '@/components/layouts/MainLayout';
import React from 'react';

const Income = () => {
  return (
    <>
      <div className='relative'>
        <IncomeAmount />
        <div id='incomeModal' className='incomeModal hidden'>
        <IncomeModal />
        </div>
        <IncomeGraph />
        <IncomeType />
      </div>
    </>
  );
};

Income.Layout = MainLayout;

export default Income;
