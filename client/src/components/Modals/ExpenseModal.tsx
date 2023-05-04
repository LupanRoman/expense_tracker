import React from 'react';
import { useStateContext } from '../../../context/StateContext';

const ExpenseModal = () => {
  const { openExpenseModal } = useStateContext();

  const showExpenseType = () => {
    const expenseType = document.getElementById('expenseType');
    expenseType?.classList.toggle('active');
  };

  const showMonth = () => {
    const months = document.getElementById('months');
    months?.classList.toggle('active');
  };

  return (
    <>
      <div className="addExpenseModal flex flex-col items-center rounded-lg bg-white px-5 py-5 gap-4">
        <h2 className="font-bold text-lg">Add Expense</h2>
        <div className="addExpense-input-container flex flex-col gap-4 font-medium md:px-5">
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" />
          </div>
          <div>
            <div>
              <h4 onClick={showExpenseType} className="cursor-pointer">
                Source
              </h4>
            </div>
            <div id="expenseType" className="expenseType hidden">
              <p className="cursor-pointer">Water</p>
              <p className="cursor-pointer">Gas</p>
              <p className="cursor-pointer">Food</p>
            </div>
          </div>
          <div>
            <h4 onClick={showMonth} className="cursor-pointer">
              Month
            </h4>
            <div id="months" className="months hidden">
              <p className="cursor-pointer">February</p>
              <p className="cursor-pointer">March</p>
              <p className="cursor-pointer">April</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 font-bold text-lg">
          <button className="bg-cta px-5 py-2 rounded-lg">Add expense</button>
          <button
            onClick={openExpenseModal}
            className="text-xs font-medium text-slate-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default ExpenseModal;
