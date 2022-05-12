import { useState, useEffect } from "react"
import { useNavigate } from "react-router";

import  { getAllCoins } from '../api'
import { addTransaction } from "../api";

export const NewTransaction = () => {
    const [currency, setCurrency] = useState("USD");
    const [coins, setCoins] = useState([]);
    const [coin, setCoin] = useState([]);
    const [amount, setAmount] = useState("");
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState("");
    const [transactionType, setTransactionType] = useState();
    const [created, setCreated] = useState();
    const [note, setNote] = useState("");

    let navigate = useNavigate();

    // Fetch alls coins names
    useEffect(() => {
        (async () => {
            const response = await getAllCoins();
            console.log("coin", coin)
            setCoins(response.data)
        })();
    }, [])

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        await addTransaction({ price, currency, amount, coin, total, transactionType, note, created });
        navigate("/assets");
    }

    return (
        <>
            <section className="py-3 py-md-4 bg-light">
                <div className="container sign-container my-md-4">
                    <div className="text-center mb-4">
                        <h2>New Transaction</h2>
                    </div>
                    <div className="card rounded border-0 shadow-sm transactionForm">
                        <div className="card-body p-4 p-md-5">
                            <div className="tab-content" id="nav-tabContent">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="form-floating mb-3">
                                        <select className="form-select" id="type" name="type" aria-label="Floating label select example" onChange={(e) => setTransactionType(e.target.value)}>
                                            <option value={"buy"}>Buy</option>
                                            <option value={"sell"}>Sell</option>
                                        </select>
                                        <label>Type</label>
                                    </div>
                                    <input type="hidden" className="d-none" name="currency" value="USD" onChange={(e) => setCurrency(e.target.value)}/>
                                    <div className="form-floating mb-3">
                                        <select className="form-select coinSelect" id="coinSelect" name="coin" aria-label="Floating label select example" onChange={(e) => setCoin(e.target.value)}>
                                            {coins.map((coin) => {
                                                return <option value={coin._id}>{coin.id}</option>
                                            })}
                                        </select>
                                        <label>Coin</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control" id="price" name="price" placeholder="Price" onChange={(e) => setPrice(e.target.value)} required="required" min="0" />
                                        <label>Price</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="amount" name="amount" placeholder="Price" required="required" min="0" onChange={(e) => setAmount(e.target.value)} />
                                        <label>Amount</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="number" className="form-control" id="total" name="total" placeholder="Total" onChange={(e) => setTotal(e.target.value)} />
                                        <label>Total</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="date" className="form-control" id="created" name="created" placeholder="Date" onChange={(e) => setCreated(e.target.value)}/>
                                        <label>Transaction Date</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="note"  name="note" onChange={(e) => setNote(e.target.value)}></textarea>
                                        <label>Note</label>
                                    </div>
                                    <button type="submit" className="btn btn-primary w-100">Create Transaction</button>
                                </form>  
                            </div>   
                        </div>
                    </div>
                </div>
            </section>
        </> 
       
    )
}