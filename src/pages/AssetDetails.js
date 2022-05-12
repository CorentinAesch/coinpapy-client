import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { getAsset } from '../api';


export const AssetDetails = () => {
    const { assetId } = useParams();
    const [asset, setAsset] = useState();

    useEffect(() => {
        (async () => {
            const response = await getAsset(assetId);
            setAsset(response.data);
            console.log(response.data)
        })();
    }, [assetId])


    return (
        <>
            <section class="py-3 py-md-5">
                <div class="container">
                    <div class="row">
                        <article class="col-12 col-lg-8">
                            <div class="card mb-3 bg-transparent border-0">
                                <div class="card-body px-0">
                                    <div class="d-flex justify-content-between">
                                        <div>
                                            {/* <h1 class="h3 d-flex align-items-center"><img src={asset.coin.image} alt="asset" width="30"/><span class="mx-2">{asset.coin.id}</span><span class="text-uppercase text-muted"><small>{asset.amount}{asset.coin.symbol}</small></span></h1> */}
                                            <h2 class="display-3 mb-0"> {asset.coin.symbol}</h2>
                                            <h2 class="display-3 mb-0">${asset.amount * asset.coin.current_price}</h2>
                                        </div>
                                        <div>
                                            <div class="d-flex">
                                                <Link to={"/transactions/create"} class="btn btn-primary me-2">New Transaction</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3 border-0 shadow-sm">
                                <div class="card-body p-md-4">
                                    <h2 class="h5 mb-3">Statistics</h2>
                                    <div class="row">
                                        <div class="col-6 col-md">
                                            <p class="text-muted mb-2">% of Holdings</p>
                                            <p class="h5">%Holdings</p>
                                        </div>
                                        <div class="col-6 col-md">
                                            <p class="text-muted mb-2">Avg Buy price</p>
                                            <p class="h5">AVG BUY PRICE</p>
                                        </div>
                                        <div class="col-6 col-md">
                                            <p class="text-muted mb-2">Total PnL</p>
                                            <p class="h5">Total PnL</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card mb-3 border-0 shadow-sm">     
                                <div class="card-header bg-dark p-3">
                                    <h2 class="h5 mb-0">Transactions</h2>
                                </div>
                                
                                <div class="card-body pb-2 pt-0 px-3">
                                    <div class="row p-2 border-bottom">
                                            <div class="col">Amount</div>
                                            <div class="col">Price</div>
                                            <div class="col d-none d-lg-block">Note</div>
                                            <div class="col">Date</div>
                                    </div>
                                    {asset.transactions.map((transaction) => {
                                        return (
                                            <ul class="list-group list-group-flush">
                                                <li class="list-group-item d-flex row align-items-center py-2 py-md-2 mx-0 px-0">
                                                    <div class="col">{transaction.amount} <span class="text-uppercase text-muted small">SYMBOL</span><span class="badge badge-primary bg-primary ms-1">{transaction.type}</span></div>
                                                    <div class="col">Price</div>
                                                    <div class="col d-none d-lg-block">Note</div>
                                                    <div align="right" class="col d-flex align-items-center justify-content-between pe-0">
                                                        Date
                                                    </div>
                                                </li>
                                            </ul>
                                        )
                                    })};
                                </div>
                            </div>
                        </article>
                        <aside class="col-12 col-lg-4">
                            <div class="card border-0 shadow-sm mb-3">
                                <div class="card-body p-md-4">
                                    <h2 class="h5 mb-3">Market stats</h2>
                                    <div class="row">
                                        <div class="col-6">
                                            <p class="text-muted mb-2">Ranking</p>
                                            <p class="h5">{asset.coin.market_cap_rank}</p>
                                        </div>
                                        <div class="col-6">
                                            <p class="text-muted mb-2">Market cap</p>
                                            <p class="h5">${asset.coin.market_cap}</p>
                                        </div>
                                        <div class="col-6">
                                            <p class="text-muted mb-2">Current Price</p>
                                            <p class="h5">${asset.coin.current_price}</p>
                                        </div>
                                        <div class="col-6">
                                            <p class="text-muted mb-2">24h variation</p>
                                            <p class="h5 {{#checkIfUpOrDown coin.price_change_percentage_24h}}{{/checkIfUpOrDown}}">{asset.coin.price_change_percentage_24h}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </aside>
                    </div>
                </div>
            </section>
        </>
    )
}
