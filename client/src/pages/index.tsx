import React from 'react';
import Link from 'next/link';
import SignUp from '@/components/Modals/SignUp';
import { useStateContext } from '../../context/StateContext';

const index = () => {
  const { showSignUp } = useStateContext();

  // !! Landing page
  return (
    <>
      <div className="px-5 md:px-20 lg:px-28 relative">
        <nav className="flex justify-between items-center py-10 font-bold text-lg md:text-2xl">
          <h2>E-Track</h2>
          <div className="text-xs md:text-lg flex items-center gap-4">
            <button
              onClick={showSignUp}
              className="bg-cta px-4 py-2 rounded-lg"
            >
              Sign Up
            </button>
            <button className="bg-cta px-4 py-2 rounded-lg">Log In</button>
          </div>
        </nav>
        <div id="signUp" className="signUpWindow hidden absolute">
          <SignUp />
        </div>
        <div className="flex flex-col gap-4 md:flex-row-reverse md:pt-10 md:items-center text-center">
          <img
            src="/capitalization_company_4.jpg"
            alt=""
            className="md:w-3/5"
          />
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-bold md:text-4xl">Why us ?</h4>
            <ul className="flex flex-col gap-2 md:text-xl">
              <li>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rerum,
                veniam?
              </li>
              <li>Lorem ipsum dolor sit amet.</li>
              <li>Lorem ipsum dolor sit amet consectetur adipisicing elit.</li>
            </ul>
          </div>
        </div>
        <div className="flex justify-center pt-10">
          <button className="bg-cta px-6 py-2 rounded-lg font-bold text-2xl">
            Join Us
          </button>
        </div>
      </div>
    </>
  );
};

export default index;
