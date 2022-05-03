import { useEffect, useState } from "react";
import { getAllCoins } from "../api";
import { Link } from 'react-router-dom';

export const ListCoins = () => {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        (async () => {
            const response = await getAllCoins();
            setCoins(response.data);
        })();
    }, []);

    return (
        <ul>
            {coins.map((coin) => {
                return <li key={coin._id}>
                    <Link to={`/coins/${coin._id}`}>{coin.id}</Link>
                </li>
            })}
        </ul>
    )
};