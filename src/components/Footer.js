import React from 'react'
import { useContext } from "react";
import { UserContext } from '../context/user.context';
import { Nav } from 'react-bootstrap'

export const Footer = () => {
    const { isLoggedIn, logoutUser } = useContext(UserContext);

  return (
    <footer className='container sticky-bottom bg-light'> 
        <div className="container d-flex flex-wrap justify-content-between align-items-center py-3 my-4">
            <p className="col-md-4 mb-0 text-muted">© 2022 Coinpapy.</p>
            <ul className="nav col-md-5 justify-content-end">
                {!isLoggedIn && <>
                    <Nav.Link href="/login">Login</Nav.Link> 
                    <Nav.Link href="/signup">Signup</Nav.Link>
                </>}
                {isLoggedIn && <>
                    <Nav className="nav justify-content-end">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/assets">Assets</Nav.Link>
                        <Nav.Link href="/watchlist">Watchlist</Nav.Link>
                        <Nav.Link href="/coins">Coins</Nav.Link>
                        <Nav.Item onClick={logoutUser} className='btn btn-outline-primary'>Log Out</Nav.Item>
                    </Nav>
                </>}
            </ul>
        </div>
    </footer>
  )
}
