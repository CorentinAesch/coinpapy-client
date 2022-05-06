import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

import { getAsset } from '../api';


const AssetDetails = () => {
    const { assetId } = useParams();
    const [asset, setAsset] = useState();

    useEffect(() => {
        (async () => {
            const response = await getAsset(assetId);
            setAsset(response.data);
        })();
    }, [])

    console.log("Asset", {asset})

    return (
        
        <div>AssetDetail</div>
    )
}

export default AssetDetails