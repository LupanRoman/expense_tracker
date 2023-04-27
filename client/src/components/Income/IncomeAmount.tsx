import React from 'react';

const IncomeAmount = () => {
  return (
    <>
      <div className="flex justify-between items-center bg-gradient-to-r from-left-gr to-right-gr px-4 py-4 rounded-lg font-bold text-xl">
        <div className='flex flex-col text-right'>
          <h4>Income</h4>
          <p className='text-xs font-medium'>/month</p>
        </div>
        <p>2000$</p>
      </div>
    </>
  );
};

export default IncomeAmount;
