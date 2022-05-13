import React from 'react'
import { useContext } from "react";
import { AssetsContext } from "../context/assets.context";

export const Dashboard = () => {
  const { totalAmount } = useContext(AssetsContext);
  const [amount, setAmount] = totalAmount;

  return (
    <h1>{amount}</h1>
  )
}
