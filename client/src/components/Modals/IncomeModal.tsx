import React from 'react';
import { useStateContext } from '../../../context/StateContext';

const IncomeModal = () => {
  const { openIncomeModal } = useStateContext();

  const showIncomeType = () => {
    const incomeType = document.getElementById('incomeType');
    incomeType?.classList.toggle('active');
  };

  const showMonth = () => {
    const months = document.getElementById('months');
    months?.classList.toggle('active');
  };
  return (
    <>
      <div className="addIncomeModal flex flex-col items-center rounded-lg bg-white px-5 py-5 gap-4">
        <h2 className="font-bold text-lg">Add income</h2>
        <div className="addIncome-input-container flex flex-col gap-4 font-medium md:px-5">
          <div>
            <label htmlFor="amount">Amount</label>
            <input type="number" />
          </div>
          <div>
            <div>
              <h4 onClick={showIncomeType} className="cursor-pointer">
                Source
              </h4>
            </div>
            <div id="incomeType" className="incomeType hidden">
              <p className="cursor-pointer">Salary</p>
              <p className="cursor-pointer">Savings</p>
              <p className="cursor-pointer">Dividends</p>
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
          <button className="bg-cta px-5 py-2 rounded-lg">Add income</button>
          <button
            onClick={openIncomeModal}
            className="text-xs font-medium text-slate-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default IncomeModal;
