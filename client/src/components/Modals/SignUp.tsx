import Link from 'next/link';
import React from 'react';
import { useStateContext } from '../../../context/StateContext';

const SignUp = () => {
  const {showSignUp} = useStateContext()
  return (
    <>
      <div>
        <h2>Sign Up</h2>
        <label htmlFor="userName">UserName</label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="password">Password</label>
        <input type="text" id="password" />
        <label htmlFor="repeatPassword">Repeat password</label>
        <input type="text" id="repeatPassword" />
        <div>
          <Link href='/Dashboard'>
          <button>Sign Up</button>
          </Link>
          <button onClick={showSignUp}>Cancel</button>
        </div>
      </div>
    </>
  );
};

export default SignUp;
