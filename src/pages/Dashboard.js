import React, { useEffect, useState } from 'react'
import { useContext } from "react";
import { AssetsContext } from "../context/assets.context";

import { Link } from 'react-router-dom';

import { getTrendings } from '../api';

export const Dashboard = () => {
  const { totalAmount } = useContext(AssetsContext);
  const [amount, setAmount] = totalAmount;

  const [trending, setTrending] = useState()

  useEffect(() => {
    (async () => {
      const response = await getTrendings()
      setTrending(response.data);
      console.log(response.data)
    })()
    
  }, [])
  

  return (
    <>
      <div className='my-5'>
        <div className="d-flex justify-content-around align-items-center">
          <div>
              <h2 className="display-3"><small>${amount}</small></h2>
          </div>
          <div className="d-flex">
              <Link to={"/transactions/create"} className="btn btn-primary me-2">New Transaction</Link>
          </div>
        </div>
        <section className="py-3 py-md-5">
          <div className="container">
              <div className="row">
                  <article>
                    <div className="card-header bg-light p-3">
                        <h2 className="h5 mb-0">Trendings</h2>
                    </div>
                    <div className="card-body pb-2 pt-0 mx-0 px-3">
                        <div className="d-flex flex-row justify-content-around p-2 border-bottom">
                            {trending && trending.coins.map((item) => {
                              return (
                                <div class="card d-inline-flex flex-column" >
                                  <img src={item.item.small} class="card-img-top p-2" alt={item.item.id} />
                                  <div class="card-body d-flex flex-column justify-space-between">
                                    <h4 class="card-body">{item.item.id}</h4>
                                    <Link to={"/coins"}><button className="btn btn-outline-primary w-100 mt-3">Details</button></Link>
                                  </div>
                                </div>
                              )
                            })}
                        </div>
                      </div>
                  </article>
                </div>
            </div>
      </section>
     </div>
    </>
  )
}
