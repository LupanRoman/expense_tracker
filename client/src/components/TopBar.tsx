import React from 'react';
import { BsFillMoonFill } from 'react-icons/bs';
import { HiMenuAlt1 } from 'react-icons/hi';

const TopBar = () => {
  const openMenu = () => {
    const menu = document.getElementById('menu-container');
    menu?.classList.toggle('active');
  };

  return (
    <>
      <div className="flex justify-between pb-5">
        <div className="flex items-center gap-5">
          <HiMenuAlt1 onClick={openMenu} className="text-2xl md:hidden cursor-pointer" />
          <h1 className="text-2xl font-bold">E-Track</h1>
        </div>
        <div className="flex items-center gap-5">
          <button>
            <BsFillMoonFill />
          </button>
          <img src="icon.png" alt="" className="h-9" />
        </div>
      </div>
    </>
  );
};

export default TopBar;
