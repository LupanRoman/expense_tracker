import Link from 'next/link';
import React from 'react';
import { useStateContext } from '../../../context/StateContext';

const SignUp = () => {
  const { showSignUp } = useStateContext();
  return (
    <>
      <div className="signUpModal flex flex-col items-center rounded-lg bg-white px-5 py-5 gap-4">
        <h2 className="font-bold text-lg">Sign Up</h2>
        <div className="signUp-input-container flex flex-col gap-4 font-medium md:px-5 ">
          <div>
            <label htmlFor="userName">UserName</label>
            <input type="text" name="userName" id="userName" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="text" id="password" />
          </div>
          <div>
            <label htmlFor="repeatPassword">Repeat password</label>
            <input type="text" id="repeatPassword" />
          </div>
        </div>
        <div className="flex flex-col gap-5 font-bold text-lg">
          <Link href="/Dashboard">
            <button className="bg-cta px-5 py-2 rounded-lg">Sign Up</button>
          </Link>
          <button
            onClick={showSignUp}
            className="text-xs font-medium text-slate-400"
          >
            Cancel
          </button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
