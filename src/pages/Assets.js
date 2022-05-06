import { useEffect, useState } from "react";
import { getAllAssets } from "../api";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";

import { Table } from "react-bootstrap";


export const Assets = () => {
    const [assets, setAssets] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await getAllAssets();
            setAssets(response.data);
            console.log("Yooo", response.data)
        })();
    }, []);

    return (
        <> 
            <button variant="dark" onClick={() => navigate('/transactions/create')}>New transaction</button>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th></th>
                    <th>Price</th>
                    <th>24H</th>
                    <th>Holdings</th>
                    <th>Avg. Buy Price</th>
                    <th>Profit/Loss</th>
                </tr>
                </thead>
                <tbody>
                {assets.map((asset) => {
                    return (
                        <tr key={asset.coin.id}>
                            <Link to={`/assets/${asset._id}`} key={asset.coin.id}>{asset.coin.id}</Link>
                            <td key={asset.coin.current_price}>{asset.coin.current_price}</td>
                            <td key={asset.coin.price_change_percentage_24h}>{asset.coin.price_change_percentage_24h}</td>
                            <td key={asset.amount}>{asset.amount}</td>
                            <td  key={asset.avgBuyPrice}>{asset.avgBuyPrice}</td>
                            <td key={asset.pnl} >{asset.pnl}</td>
                            <button variant="dark" onClick={() => navigate('/transactions/create')}>+</button>
                        </tr>
                    )
                })}
                <tr> 
                </tr>
                </tbody>
            </Table>
        

        </>
    )
}