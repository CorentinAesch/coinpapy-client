import { useState, useEffect } from 'react'
import { useNavigate } from "react-router";

import { getAllTransaction } from '../api';

import { Link } from 'react-router-dom';



export const ListTransaction = () => {
  const [transactions, setTransactions] = useState([{}])  

  const navigate = useNavigate();

  useEffect(() => {
        (async () => {
            const response = await getAllTransaction();
            setTransactions(response.data);
        })();
    }, [])

  return (
    <>
        <button variant="dark" onClick={() => navigate('/transactions/create')}>New transaction</button>
        <ul>
            {transactions.map((transaction) => {
                return <li key={transaction._id}>
                    <Link to={`/coins/${transaction._id}`}>{transaction.id}</Link>
                </li>
            })}
        </ul>
    </>
  )
}
