import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { AssetsContext } from "../context/assets.context";

import { Link } from 'react-router-dom';
import axios from 'axios';

export const Dashboard = () => {
  const { totalAmount } = useContext(AssetsContext);
  const [amount, setAmount] = totalAmount;

  const [trending, setTrending] = useState()

  useEffect(() => {
    const response = axios.get('https://api.coingecko.com/api/v3/search/trending')
    setTrending(response.data);
    console.log("trending", response)
  }, [])
  

  return (
    <>
      <article className="col-12 col-lg-8">
        <div className="card mb-3 bg-transparent border-0">
            <div className="card-body px-0">
                <div className="d-flex justify-content-between">
                    <div>
                        <h2 className="display-3 mb-0"><small>${amount}</small></h2>
                    </div>
                    <div>
                        <div className="d-flex">
                            <Link to={"/transactions/create"} className="btn btn-primary me-2">New Transaction</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </article>
    </>
  )
}
