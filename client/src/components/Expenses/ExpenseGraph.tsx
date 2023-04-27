import React from 'react';

const ExpenseGraph = () => {
  return (
    <>
      <div className="py-6 flex flex-col gap-5 font-bold text-2xl">
        <h4>Predominant expense</h4>
        <div className="h-60 w-full bg-slate-500">Graph</div>
      </div>
    </>
  );
};

export default ExpenseGraph;
