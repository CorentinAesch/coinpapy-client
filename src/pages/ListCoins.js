import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import ToggleButton from 'react-bootstrap/ToggleButton'
import { getAllCoins } from "../api";

export const ListCoins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAllCoins();
            setCoins(response.data);
        })();
    }, []);

console.log("YOOO", coins)

    return (

        <> 
            <section className="py-3 py-md-5">
                <div className="container">
                    <div className="row">
                        <article>
                            <div className="card mb-3 border-0 shadow-sm">
                                <div className="card-header bg-white p-3">
                                    <h2 className="h5 mb-0">All Cryptocurrencies</h2>
                                </div>
                                <div className="card-body pb-2 pt-0 mx-0 px-3">
                                    <div className="row p-2 border-bottom">
                                        <div className="row"> 
                                            <div className="col">Name</div>               
                                            <div className="col">Price</div>
                                            <div className="col d-none d-lg-block">24H</div>
                                            <div className="col d-none d-lg-block">ATH</div>
                                            <div className="col d-none d-lg-block">MarketCap</div>
                                            <div className="col d-none d-lg-block">Circulating Supply</div>
                                            <div className="col d-none d-lg-block">Rank</div>
                                        </div>
                                    </div>
                                    {coins.map((coin) => {
                                        return (
                                            <ul key={coin.id} className="list-group list-group-flush">
                                                <li className="list-group-item px-0 d-flex row align-items-center py-2 py-md-2 mx-0">
                                                    {/* <ToggleButton/> */}
                                                    <div className="col-4 col-md ps-md-0">
                                                        <Link to={`/coins/${coin._id}`} key={coin.id} className="text-dark text-decoration-none d-flex">
                                                            <div className="justify-content-center">
                                                                {coin.image && <img style={{margin:15+'px'}} src={coin.image} className="me-2" alt="coin" height="50" />}
                                                                <h3 className="h6 mb-0 ">{coin.id}</h3>
                                                                <p className="mb-0 text-muted text-uppercase"><small>{coin.symbol}</small></p>
                                                            </div>
                                                        </Link>
                                                    </div>
                                                    <div key={coin.current_price} className="col">${coin.current_price}</div>
                                                    <div key={coin.price_change_percentage_24h} className="col">{coin.price_change_percentage_24h}</div>
                                                    <div key={coin.ath} className="col">${coin.ath}</div>
                                                    <div key={coin.market_cap} className="col">{coin.market_cap}</div>
                                                    <div key={coin.circulating_supply} className="col">{coin.circulating_supply}</div>
                                                    <div key={coin.market_cap_rank} className="col">{coin.market_cap_rank}</div>
                                                    <div align="right" className="col d-flex align-items-center">
                                                        <Link to={`/coins/${coin._id}`} className="btn btn-outline-primary">Infos</Link>    
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
};