import React from 'react';

const ExpenseAmount = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-gradient-to-r from-left-gr to-right-gr px-4 py-4 rounded-lg font-bold text-xl">
        <div className="flex flex-col text-right">
          <h4>Expense</h4>
          <p className="text-xs font-medium">/month</p>
        </div>
        <p>1800$</p>
      </div>
    </>
  );
};

export default ExpenseAmount;
