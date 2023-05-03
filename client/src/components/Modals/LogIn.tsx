import React from 'react';
import { useStateContext } from '../../../context/StateContext';
import Link from 'next/link';
const LogIn = () => {
  const { showLogIn } = useStateContext();
  return (
    <>
      <div className="logInModal flex flex-col items-center rounded-lg bg-white px-5 py-5 gap-4">
        <h2 className="font-bold text-lg">Log in</h2>
        <div className="logIn-input-container flex flex-col gap-4 font-medium md:px-5 ">
          <div>
            <label htmlFor="userName">UserName</label>
            <input type="text" name="userName" id="userName" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" />
          </div>
        </div>
        <div className="flex flex-col gap-5 font-bold text-lg">
          <Link href="/Dashboard">
            <button className="bg-cta px-5 py-2 rounded-lg">Log in</button>
          </Link>
          <button
            onClick={showLogIn}
            className="text-xs font-medium text-slate-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default LogIn;
