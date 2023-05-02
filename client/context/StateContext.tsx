import React, { createContext, useContext, useState, ReactNode } from 'react';

const Context = createContext(null);

type Containments = {
  children: React.ReactNode;
};

export const StateContext = ({ children }: Containments) => {
  const showSignUp = () => {
    const sigUpModal = document.getElementById('signUp');
    sigUpModal?.classList.toggle('active');
  };



  return (
    <Context.Provider
    // TODO Need to fix the issue with the type returned from the value 
      value={{
        showSignUp,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
