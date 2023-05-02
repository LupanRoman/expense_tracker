import React from 'react'

const SignUp = () => {
  return (
    <>
    <div>
        <h2>Sign Up</h2>
        <label htmlFor="userName">UserName</label>
        <input type="text" name='userName' id='userName' />
        <label htmlFor="password">Password</label>
        <input type="text" id='password' />
        <label htmlFor="repeatPassword">Repeat password</label>
        <input type="text" id='repeatPassword' />
        <button>Sign Up</button>
    </div>
    </>
  )
}

export default SignUp