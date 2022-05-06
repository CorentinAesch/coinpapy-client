import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getACoin } from '../api';

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
        <h1>{coin.id}</h1>
    )
}
