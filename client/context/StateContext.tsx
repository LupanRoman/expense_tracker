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

  const showLogIn = () => {
    const logInModal = document.getElementById('logIn');
    logInModal?.classList.toggle('active');
  };

  const openIncomeModal = () => {
    const incomeModal = document.getElementById('incomeModal');
    incomeModal?.classList.toggle('active');
  };

  const openExpenseModal = () => {
    const expenseModal = document.getElementById('expenseModal');
    expenseModal?.classList.toggle('active');
  };

  return (
    <Context.Provider
      // TODO Need to fix the issue with the type returned from the value
      value={{
        showSignUp,
        showLogIn,
        openIncomeModal,
        openExpenseModal,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export const useStateContext = () => useContext(Context);
