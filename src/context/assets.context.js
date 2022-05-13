import { useEffect, useState, createContext } from "react";
import React from 'react'

import { amountFormatter } from "../helpers/helpers";
import { getAllAssets } from "../api";

export const AssetsContext = createContext();

export const AssetsProvider = (props) => {
    const [assets, setAssets] = useState([]);
    const [amount, setAmount] = useState("");

    useEffect(() => {
        (async () => {
            const response = await getAllAssets();
            setAssets(response.data);
        })();
    }, []);

    useEffect(() => {
        (async () => {
            let amount = 0;
            for (let i = 0; i < assets.length; i++){
                amount = amount + assets[i].amount * assets[i].coin.current_price;
            }
            amount = amountFormatter(amount)
            setAmount(amount);
        })();
    }, [assets]);

  return (
    <AssetsContext.Provider value={{allAssets: [assets, setAssets], totalAmount: [amount, setAmount]}}>
        {props.children}
    </AssetsContext.Provider>
  )
}
