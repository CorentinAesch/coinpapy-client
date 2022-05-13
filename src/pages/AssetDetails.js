import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom';

import { getAllAssets, getAsset, deleteATransaction } from '../api';
import { amountFormatter } from '../helpers/helpers'


export const AssetDetails = () => {
    const { assetId } = useParams();
    const [asset, setAsset] = useState();
    const [avg, setAvg] = useState();
    const [pnl, setPnl] = useState();
    const [assets, setAssets] = useState();
    const [percentageHoldings, setPercentageHoldings] = useState();

    useEffect(() => {
        (async () => {
            const response = await getAsset(assetId);
            setAsset(response.data);

             
        })();
    }, [assetId])
    
    useEffect(() => {
        (async () => {
            let total = 0;
            let num = 0;
                    
            await asset.transactions.forEach(transaction => {
                if(transaction.transactionType === 'buy'){
                    total += transaction.amount * transaction.price;
                    num += transaction.amount;
                }
            })
            const average = (total / num).toFixed(2)
            setAvg(average);
        })();
    }, [asset])

    useEffect(() => {
        (async () => {
            const pnl = await (asset.coin.current_price * asset.amount - (avg * asset.amount)).toFixed(2)
            setPnl(pnl);
        })();
    }, [avg])

    useEffect(() => {
        (async () => {
            const response = await getAllAssets();
            setAssets(response.data);

            const total = assets.reduce((a,b) => {
                let amount = b.amount * b.coin.current_price;
                b.totalAmount =  amountFormatter(amount);
                return a + amount;
            } ,0);

            const percentage = (asset.amount * asset.coin.current_price * 100) / total;
            setPercentageHoldings(percentage.toFixed(2));
        })();
    }, [asset])
    

    return (
        <> {asset ? 
            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row">
                        <article className="col-12 col-lg-8">
                            <div className="card mb-3 bg-transparent border-0">
                                <div className="card-body px-0">
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            <h1 className="h3 d-flex align-items-center"><img src={asset.coin.image} alt="asset" width="30"/><span className="mx-2">{asset.coin.id}</span><span className="text-uppercase text-muted"><small>{asset.amount} {asset.coin.symbol}</small></span></h1>
                                            <h2 className="display-3 mb-0"><small>${asset.coin.current_price * asset.amount}</small></h2>
                                        </div>
                                        <div>
                                            <div className="d-flex">
                                                <Link to={"/transactions/create"} className="btn btn-primary me-2">New Transaction</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 border-0 shadow-sm">
                                <div className="card-body p-md-4">
                                    <h2 className="h5 mb-3">Statistics</h2>
                                    <div className="row">
                                        <div className="col-6 col-md">
                                            <p className="text-muted mb-2">% of Holdings</p>
                                            <p className="h5">%{percentageHoldings}</p>
                                        </div>
                                        <div className="col-6 col-md">
                                            <p className="text-muted mb-2">Avg Buy price</p>
                                            <p className="h5">${avg}</p>
                                        </div>
                                        <div className="col-6 col-md">
                                            <p className="text-muted mb-2">Total PnL</p>
                                            <p className="h5">${pnl}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="card mb-3 border-0 shadow-sm">     
                                <div className="card-header bg-dark p-3">
                                    <h2 className="h5 mb-0">Transactions</h2>
                                </div>
                                
                                <div className="card-body pb-2 pt-0 px-3">
                                    <div className="row p-2 border-bottom">
                                            <div className="col">Amount</div>
                                            <div className="col">Price</div>
                                            <div className="col d-none d-lg-block">Note</div>
                                            <div className="col">Date</div>
                                    </div>
                                    {asset.transactions.map((transaction) => {
                                        return (
                                            <ul key={transaction._id} className="list-group list-group-flush">
                                                <li className="list-group-item d-flex row align-items-center py-2 py-md-2 mx-0 px-0 border-bottom">
                                                    <div className="col">{transaction.amount} <span className="text-uppercase text-muted small">{asset.coin.symbol}</span><span className="badge badge-primary bg-primary ms-1">{transaction.type}</span></div>
                                                    <div className="col">${transaction.price}</div>
                                                    <div className="col d-none d-lg-block">{transaction.notes ? transaction.notes : "" }</div>
                                                    <div align="right" className="col d-flex align-items-center justify-content-between pe-0">
                                                    {transaction.created}
                                                    {/* <div className="d-flex">
                                                        <Link to={"/dashboard"} className="btn px-1 btn-sm"><img src="/src/Images/edit-cb.svg" alt="edit" width="18"/></Link>
                                                        <form onSubmit={deleteATransaction(asset._id, transaction._id)} method="POST">
                                                            <button type="submit" className="btn px-1 btn-sm"><img src="/src/images/delete-cb.svg" alt="delete" width="18"/></button>
                                                        </form>
                                                    </div> */}
                                                    </div>
                                                </li>
                                            </ul>
                                        )
                                    })};
                                </div>
                            </div>
                        </article>
                        <aside className="col-12 col-lg-4">
                            <div className="card border-0 shadow-sm mb-3">
                                <div className="card-body p-md-4">
                                    <h2 className="h5 mb-3">Market stats</h2>
                                    <div className="row">
                                        <div className="col-6">
                                            <p className="text-muted mb-2">Ranking</p>
                                            <p className="h5">{asset.coin.market_cap_rank}</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-muted mb-2">Market cap</p>
                                            <p className="h5">${amountFormatter(asset.coin.market_cap)}</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-muted mb-2">Current Price</p>
                                            <p className="h5">${asset.coin.current_price}</p>
                                        </div>
                                        <div className="col-6">
                                            <p className="text-muted mb-2">24h variation</p>
                                            <p className="h5">{asset.coin.price_change_percentage_24h.toFixed(2)}%</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
        : <div>Loading...</div>}
        </>
    )
}
