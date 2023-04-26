import React from 'react';
import Link from 'next/link';
import { CgClose } from 'react-icons/cg';
import { AiOutlineHome } from 'react-icons/ai';
import { TbMoneybag, TbPigMoney } from 'react-icons/tb';
import { ImStatsBars2 } from 'react-icons/im';

const Menu = () => {
  const closeMenu = () => {
    const menu = document.getElementById('menu-container');
    menu?.classList.remove('active');
  };

  return (
    <>
      <div className="menu-component flex flex-col gap-16 dark:md:bg-dark-menu dark:shadow-xl">
        <div className="flex items-center justify-between md:hidden">
          <h4 className="text-xl font-black md:text-2xl">E-Track</h4>
          <CgClose onClick={closeMenu} className="cursor-pointer text-3xl" />
        </div>
        <div className="links flex flex-col gap-8 font-medium justify-center items-center md:pt-20">
          <Link
            onClick={closeMenu}
            href="/Dashboard"
            className="bg-cta h-14 w-14 rounded-full flex justify-center items-center text-3xl"
          >
            <AiOutlineHome />
          </Link>
          <Link
            onClick={closeMenu}
            href="/Income"
            className="bg-cta h-14 w-14 rounded-full flex justify-center items-center text-3xl"
          >
            <TbMoneybag />
          </Link>
          <Link
            onClick={closeMenu}
            href="/Expenses"
            className="bg-cta h-14 w-14 rounded-full flex justify-center items-center text-3xl"
          >
            <TbPigMoney />
          </Link>
          <Link
            onClick={closeMenu}
            href="/Stats"
            className="bg-cta h-14 w-14 rounded-full flex justify-center items-center text-3xl"
          >
            <ImStatsBars2 />
          </Link>
        </div>
      </div>
    </>
  );
};

export default Menu;
