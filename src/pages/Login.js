import { login } from "../api";
import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
//import { Link } from "react-router-dom";
import { userContext } from "../context/user.context";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { storeToken, authenticateUser } = useContext(userContext);

    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        const response = await login({ email, password });
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={ handleSubmitForm }>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account?</p>
            <link to={"/signup"}>Sign up</link> 
        </>
    )
}