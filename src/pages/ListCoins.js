import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

import { Table } from "react-bootstrap";
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

        <> <section class="py-3 py-md-5 overflow-hidden">
                <div class="container">
                    <div class="card mb-4 border-0 shadow-sm">
                        <div className="card-header bg-white py-3">
                                    <h2 className="h5 mb-0">Market</h2>
                        </div>
                        <Table responsive="sm" className="card-body p-0">
                            <thead className="row p-2 py-md-3 border-bottom mx-0">
                            <tr>            
                                <th scope="col" className="col-4 col-md "></th>
                                <th></th>
                                <th></th>
                                <th className="col">Price</th>
                                <th className="col d-none d-lg-block">24H</th>
                                <th className="col d-none d-lg-block">ATH</th>
                                <th className="col d-none d-lg-block">MarketCap</th>
                                <th className="col d-none d-lg-block">Circulating Supply</th>
                                <th className="col d-none d-lg-block">Rank</th>
                            </tr>
                            </thead>
                            <tbody>
                            {coins.map((coin) => {
                                return (
                                    <tr key={coin.id} className="list-group list-group-flush">
                                        <ToggleButton/>
                                        <td>{coin.image && <img style={{margin:15+'px'}} src={coin.image} alt="coin" height="50" />}</td>
                                        <Link to={`/coins/${coin._id}`} key={coin.id}>{coin.id}</Link>
                                        <td key={coin.current_price}>{coin.current_price}</td>
                                        <td key={coin.price_change_percentage_24h}>{coin.price_change_percentage_24h}</td>
                                        <td key={coin.ath}>{coin.ath}</td>
                                        <td key={coin.market_cap}>{coin.market_cap}</td>
                                        <td key={coin.circulating_supply}>{coin.circulating_supply}</td>
                                        <td key={coin.market_cap_rank}>{coin.market_cap_rank}</td>
                                    </tr>
                                )
                            })} 
                            </tbody>
                        </Table>
                    </div>
                </div>
            </section>
        </>
       
    )
};