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

        <>
            <Table responsive="sm">
                <thead>
                <tr>            
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>Price</th>
                    <th>24H</th>
                    <th>ATH</th>
                    <th>MarketCap</th>
                    <th>Circulating Supply</th>
                    <th>Rank</th>
                </tr>
                </thead>
                <tbody>
                {coins.map((coin) => {
                    return (
                        <tr key={coin.id}>
                            <ToggleButton/>
                            <td>{coin.image && <img src={coin.image} alt="coin" height="50" />}</td>
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
        </>
       
    )
};