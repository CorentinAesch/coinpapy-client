//import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from '../context/user.context';

import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";


export const Appbar = () => {
    const { isLoggedIn, logoutUser } = useContext(UserContext);

    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="/">CoinPapy</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                {!isLoggedIn && <>
                    <Nav.Link href="/login" className="position-relative end-10">Login</Nav.Link>
                    <Nav.Link href="/signup" className="position-absolute end-0">Signup</Nav.Link>
                </>}
                {isLoggedIn && <>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Dashboard</Nav.Link>
                        <Nav.Link href="/assets">Assets</Nav.Link>
                        <Nav.Link href="/watchlist">Watchlist</Nav.Link>
                        <Nav.Link href="/coins">Coins</Nav.Link>
                        <NavDropdown title="Profile" id="basic-nav-dropdown" className="position-absolute end-0">
                            <NavDropdown.Item href="/edit" className="position-relative">Profile</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logoutUser}>Logout</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}