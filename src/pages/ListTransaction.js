import { useState, useEffect } from 'react'
import { useNavigate } from "react-router";

import { getAllTransaction } from '../api';

import { Link } from 'react-router-dom';



export const ListTransaction = () => {
  const [transactions, setTransactions] = useState([{}])  

  useEffect(() => {
        (async () => {
            const response = await getAllTransaction();
            setTransactions(response.data);
        })();
    }, [])

  return (
    <>
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
