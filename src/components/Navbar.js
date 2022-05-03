import { NavLink } from "react-router-dom";
/* import { useContext } from "react";
import { userContext } from '../context/user.context'; */

export const Navbar = () => {
    /* const { isLoggedIn, user, logoutUser } = useContext(userContext); */

    return (
        <nav>
            <div>
                <NavLink to="/">
                    Dashboard
                </NavLink>
            </div>
            <div>
                <NavLink to="/coins">
                    Coins
                </NavLink>
            </div>
            <div>
                <NavLink to="/login">
                    Login
                </NavLink>
            </div>
        </nav>
    )
}