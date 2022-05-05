import { useEffect, useState } from "react";
import { getAllAssets } from "../api";
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router";


export const Assets = () => {
    const [assets, setAssets] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        (async () => {
            const response = await getAllAssets();
            setAssets(response.data);
        })();
    }, []);

    return (
        <> 
            <button variant="dark" onClick={() => navigate('/transactions/create')}>New transaction</button>
            <ul>
                {assets.map((asset) => {
                    return <li key={asset._id}>
                        <Link to={`/assets/${asset._id}`}>{asset.coin.id}</Link>
                    </li>
                })}
            </ul>
        </>
    )
}