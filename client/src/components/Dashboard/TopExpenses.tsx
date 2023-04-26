import React from 'react';
import { IoIosWater } from 'react-icons/io';
import { GiGasStove } from 'react-icons/gi';
import { MdOutlineElectricalServices, MdFastfood } from 'react-icons/md';

const TopExpenses = () => {
  return (
    <>
      <div className="flex flex-col gap-5">
        <h4 className="font-bold text-2xl">Top expenses</h4>
        <div className="expenses-container flex flex-col md:flex-row gap-5">
          <div className="flex w-full flex-col gap-5">
            <div className="expense-wrapper flex items-center justify-between w-full font-medium text-lg">
              <div className="flex items-center gap-2">
                <IoIosWater className="text-2xl" />
                <h6>Water</h6>
              </div>
              <p>200$</p>
            </div>
            <div className="expense-wrapper flex items-center justify-between w-full font-medium text-lg">
              <div className="flex items-center gap-2">
                <GiGasStove className="text-2xl" />
                <h6>Gas</h6>
              </div>
              <p>80$</p>
            </div>
          </div>
          <div className="flex w-full flex-col gap-5">
            <div className="expense-wrapper flex items-center justify-between w-full font-medium text-lg">
              <div className="flex items-center gap-2">
                <MdOutlineElectricalServices className="text-2xl" />
                <h6>Electricity</h6>
              </div>
              <p>200$</p>
            </div>
            <div className="expense-wrapper flex items-center justify-between w-full font-medium text-lg">
              <div className="flex items-center gap-2">
                <MdFastfood className="text-2xl" />
                <h6>Food</h6>
              </div>
              <p>200$</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopExpenses;
