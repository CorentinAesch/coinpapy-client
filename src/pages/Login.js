import { login } from "../api";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";

export const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { storeToken, authenticateUser } = useContext(UserContext);

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
            <h1>Login</h1>
            <form onSubmit={ handleSubmitForm }>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />

                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <button type="submit">Login</button>
            </form>
            <p>Don't have an account?</p>
            <Link to={"/signup"}>Sign up</Link> 
       </>
    )
}