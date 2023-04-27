import ExpenseAmount from '@/components/Expenses/ExpenseAmount';
import ExpenseGraph from '@/components/Expenses/ExpenseGraph';
import MainLayout from '@/components/layouts/MainLayout';
import ExpenseType from '@/components/Expenses/ExpenseType'
import React from 'react';


const Expenses = () => {
  return (
    <>
      <div>
        <ExpenseAmount />
        <ExpenseGraph />
        <ExpenseType />
      </div>
    </>
  );
};

Expenses.Layout = MainLayout;

export default Expenses;
