import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
const ExpenseMonth = () => {
  return (
    <>
      <div className="py-6 flex flex-col gap-5 font-bold text-2xl">
      <div className="flex gap-3 items-baseline font-bold text-2xl">
          <h4>Water</h4>
          <p className="text-sm font-medium">April</p>
          <IoIosArrowDown className="text-sm" />
        </div>
        <div className="h-60 w-full bg-slate-500">Graph</div>
      </div>
    </>
  );
};

export default ExpenseMonth;
