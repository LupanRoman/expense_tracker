import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { FiEdit2 } from 'react-icons/fi';
import { MdDeleteOutline } from 'react-icons/md';
import { IoIosWater } from 'react-icons/io';
import { GiGasStove } from 'react-icons/gi';
import { MdOutlineElectricalServices, MdFastfood } from 'react-icons/md';
import { GrAdd } from 'react-icons/gr';
import { useStateContext } from '../../../context/StateContext';

const IncomeType = () => {
  const { openIncomeModal } = useStateContext();
  return (
    <>
      <div className="flex flex-col gap-5 ">
        <div className="flex gap-3 items-baseline font-bold text-2xl">
          <h4>Income</h4>
          <p className="text-sm font-medium">April</p>
          <IoIosArrowDown className="text-sm" />
        </div>
        <div>
          <div className="flex gap-5 items-center">
            <div className="expense-wrapper flex justify-between w-full text-lg">
              <div className="flex items-center gap-2 ">
                <IoIosWater className="text-3xl" />
                <h6>Water</h6>
              </div>
              <p>200$</p>
            </div>
            <div className="flex gap-5 text-xl">
              <button>
                <FiEdit2 />
              </button>
              <button>
                <MdDeleteOutline className="text-2xl" />
              </button>
            </div>
          </div>
        </div>
        <div>
          <button onClick={openIncomeModal} className="h-12 w-12 bg-cta rounded-full flex items-center justify-center absolute bottom-3 right-4 text-2xl">
            <GrAdd />
          </button>
        </div>
      </div>
    </>
  );
};

export default IncomeType;
