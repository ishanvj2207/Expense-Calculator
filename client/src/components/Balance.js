import React, { useContext } from "react";
import { GlobalContext } from "../contexts/GlobalState";

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);
  const amountsArr = transactions.map((transaction) => transaction.amount);
  const total = amountsArr.reduce((acc, amount) => (acc += amount), 0);
  total.toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
};
