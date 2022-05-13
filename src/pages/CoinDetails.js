import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getACoin } from '../api';
import { amountFormatter } from '../helpers/helpers'

export const CoinDetails = () => {
    const { coinId } = useParams();
    const [coin, setCoin] = useState("");

    useEffect(() => {
        (async () => {
            const response = await getACoin(coinId);
            setCoin(response.data);
            console.log("YOOO", coin)
        })();
    }, [])

    console.log("coin", coin)
    
    return (
        <> 
            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row">
                        <article className="col-12 col-lg-8">
                            <div className="card mb-3 bg-transparent border-0">
                                <div className="card-body p-0">
                                    <h1 className="h3 d-flex align-items-center"><img src={coin.image} alt={coin.id} width="30"/><span className="mx-2">{coin.id}</span><span className="text-uppercase text-muted"><small>{coin.symbol}</small></span></h1>
                                    <h2 className="display-3 mb-0">${coin.current_price}</h2>
                                </div>
                            </div>
                            <div className="card border-0 shadow-sm mb-3">
                                <div className="card-body p-md-4">
                                    <h2 className="h5 mb-3">Market stats</h2>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="text-muted mb-2">Ranking</p>
                                            <p className="h5">{coin.market_cap_rank}</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-muted mb-2">Market cap</p>
                                            <p className="h5">${amountFormatter(coin.market_cap)}</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-muted mb-2">Current Price</p>
                                            <p className="h5">${coin.current_price}</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-muted mb-2">24h variation</p>
                                            <p className="h5">{coin.price_change_percentage_24h.toFixed(2)}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}
