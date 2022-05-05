import { useState } from "react"
import { useNavigate } from "react-router";

export const AddTransaction = () => {
    const [coin, setCoin] = useState("");
    const [quantity, setQuantity] = useState("");
    const [price, setPrice] = useState("");

    let navigate = useNavigate();

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        await AddTransaction({ price, currency, amount, coin, total, transactionType, note });
        
        navigate("/");
    }

    return (
        <form onSubmit={handleFormSubmit}>
            <label labelFor="coin">Currency</label>
            <input id="coin" type="text" value={Currency}
                onChange={(e) => setCoin(e.target.value)} />

            <label labelFor="quantity">Quantity</label>
            <input id="quantity" type="text" value={quantity}
                onChange={(e) => setQuantity(e.target.value)} />

            <label labelFor="price">Price</label>
            <input id="price" type="text" 
                onChange={(e) => setPrice(e.target.value)} />

            <button type="submit">Add transaction</button>
        </form>
    )
}