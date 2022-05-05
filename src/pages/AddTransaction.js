import { useState, useEffect } from "react"
import { useNavigate } from "react-router";

import { Form, Button } from "react-bootstrap";

import  { getAllCoins } from '../api'

export const AddTransaction = () => {
    const [currency, setCurrency] = useState("USD");
    const [coin, setCoin] = useState([]);
    const [amount, setAmount] = useState("");
    const [price, setPrice] = useState("");
    const [total, setTotal] = useState("");
    const [transactionType, setTransactionType] = useState("buy");
    const [note, setNote] = useState("");

    let navigate = useNavigate();

    // Fetch alls coins names
    useEffect(() => {
        (async () => {
            const response = await getAllCoins();
            console.log(response.data)

        })();
    }, [])

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        await AddTransaction({ price, currency, amount, coin, total, transactionType, note });
        
        navigate("/transactions");
    }

    return (
        <>
             <Form onSubmit={handleFormSubmit}>

                <Form.Group className="mb-3" controlId="Currency">
                    <Form.Label>Currency</Form.Label>
                    <Form.Select defaultValue="USD" onChange={(e) => setCurrency(e.target.value)}>
                        <option>USD</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Coin">
                    <Form.Label>Coin</Form.Label>
                    <Form.Select defaultValue="BTC" onChange={(e) => setCoin(e.target.value)}>
                        <option>BTC</option>
                        <option>...</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Amount">
                    <Form.Label>Amount</Form.Label>
                    <Form.Control placeholder="0" onChange={(e) => setAmount(e.target.value)}/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control defaultValue="39k$" onChange={(e) => setPrice(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="Total">
                    <Form.Label>Total</Form.Label>
                    <Form.Control defaultValue="390k$" onChange={(e) => setTotal(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="TransactionType">
                    <Form.Label>Transaction Type</Form.Label>
                    <Form.Select defaultValue="Buy" onChange={(e) => setTransactionType(e.target.value)}>
                        <option>Buy</option>
                        <option>Sell</option>
                    </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="Notes">
                    <Form.Label>Notes</Form.Label>
                    <Form.Control placeholder="Type here what you want to remember" onChange={(e) => setNote(e.target.value)} />
                </Form.Group>
                

                <Button variant="primary" type="submit">
                    Add Transaction
                </Button>
            </Form>
        </>
       
    )
}