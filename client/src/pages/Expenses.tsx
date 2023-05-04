import ExpenseAmount from '@/components/Expenses/ExpenseAmount';
import ExpenseGraph from '@/components/Expenses/ExpenseGraph';
import MainLayout from '@/components/layouts/MainLayout';
import ExpenseType from '@/components/Expenses/ExpenseType';
import React from 'react';
import ExpenseModal from '@/components/Modals/ExpenseModal';

const Expenses = () => {
  return (
    <>
      <div>
        <ExpenseAmount />
        <div id="expenseModal" className="expenseModal hidden">
          <ExpenseModal />
        </div>
        <ExpenseGraph />
        <ExpenseType />
      </div>
    </>
  );
};

Expenses.Layout = MainLayout;

export default Expenses;
