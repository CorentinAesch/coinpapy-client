import { useContext } from "react";
import { Link } from 'react-router-dom';

import { AssetsContext } from "../context/assets.context";



export const Assets = () => {
    const { allAssets, totalAmount } = useContext(AssetsContext);
    const [amount, setAmount] = totalAmount;
    const [assets, setAssets] = allAssets;

    return (
        <> 
            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row">
                        <article className="col-12">
                            <div className="card mb-4 bg-transparent border-0">
                                <div className="card-body pt-0 px-0">
                                    <div className="d-flex align-items-start justify-content-between">
                                        <div>
                                            <h1 className="display-3 mb-0">${ amount }</h1>
                                        </div>
                                        <div>
                                            <Link to={"/transactions/create"} className="btn btn-primary ps-2 me-2 mt-4">Buy/Sell</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                        <article>
                            <div className="card mb-3 border-0 shadow-sm">
                                <div className="card-header bg-white p-3">
                                    <h2 className="h5 mb-0">Assets</h2>
                                </div>
                                <div className="card-body pb-2 pt-0 mx-0 px-3">
                                    <div className="row p-2 border-bottom">
                                        <div className="col-4 col-md ">Name</div>
                                        <div className="col">Holdings</div>
                                        <div className="col d-none d-lg-block">Price</div>
                                        <div className="col d-none d-lg-block">Avg Buy Price</div>
                                        <div className="col d-none d-lg-block">Profit/Loss</div>
                                        <div className="col"></div>
                                    </div>
                                    {assets && assets.map((asset) => {
                                        return (
                                            <ul key={asset._id} className="list-group list-group-flush">
                                                <li className="list-group-item px-0 d-flex row align-items-center py-2 py-md-2 mx-0">
                                                    <div className="col-4 col-md ps-md-0">
                                                        <Link to={`/assets/${asset._id}`} className="text-dark text-decoration-none d-flex align-items-center">
                                                            <img src={asset.coin.image} className="me-2" alt="Bitcoin" width="34"/>
                                                            <div>
                                                                <h3 className="h6 mb-0 ">{asset.coin.id}</h3>
                                                                <p className="mb-0 text-muted text-uppercase"><small>{asset.coin.symbol}</small></p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div className="col">
                                                        <div>
                                                            <p className="mb-0">${asset.amount * asset.coin.current_price}</p>
                                                            <div className="d-flex">
                                                                <p className="mb-0 text-muted text-uppercase"><small>{asset.amount} {asset.coin.symbol}</small></p>
                                                                <p className="mx-1 mb-0 text-muted">&middot;</p>
                                                                <p className="mb-0  d-inline-block d-lg-none {{#checkIfUpOrDown}}{{/checkIfUpOrDown}}"><small>{asset.coin.price_change_percentage_24h}%</small></p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="col  d-none d-lg-block">
                                                        <div>
                                                            <p className="mb-0">${asset.coin.current_price}</p>
                                                            <p className="mb-0 {{#checkIfUpOrDown coin.price_change_percentage_24h}}{{/checkIfUpOrDown}}"><small>{asset.coin.price_change_percentage_24h}%</small></p>
                                                        </div>
                                                    </div>
                                                    <div className="col d-none d-lg-block">
                                                        <div>
                                                            <p className="mb-0">avgBuyPrice</p>
                                                        </div>
                                                    </div>
                                                    <div className="col d-none d-lg-block">
                                                        <div>
                                                            <p className="mb-0 {{#checkIfUpOrDown}}{{/checkIfUpOrDown}}">$PNL</p>
                                                        </div>
                                                    </div>
                                                    <div align="right" className="col d-flex align-items-center">
                                                        <Link to={`/transactions/create`} className="btn text-primary">Buy/Sell</Link>    
                                                    </div>
                                                </li>
                                            </ul>
                                        ) 
                                    })} 
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}