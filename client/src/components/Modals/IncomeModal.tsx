import React from 'react';

const IncomeModal = () => {
  const showIncomeType = () => {
    const incomeType = document.getElementById('incomeType');
    incomeType?.classList.toggle('active');
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
            <h4 onClick={showIncomeType}>Source</h4>
            <div id="incomeType">
              <p>Salary</p>
              <p>Savings</p>
              <p>Dividends</p>
            </div>
          </div>
          <div>
            <h4>Month</h4>
            <div id="months" className="months ">
              <p>February</p>
              <p>March</p>
              <p>April</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 font-bold text-lg">
          <button className="bg-cta px-5 py-2 rounded-lg">Add income</button>
          <button className="text-xs font-medium text-slate-400">Cancel</button>
        </div>
      </div>
    </>
  );
};

export default IncomeModal;
