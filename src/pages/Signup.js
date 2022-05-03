import { signup } from "../api";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await signup({ password, email });
        navigate("/");
    }

    return (
        <>
            <h1>Sign Up</h1>
            <form onSubmit={ handleSubmitForm }>
                <label>Password</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />

                <label>Username</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />

                <button type="submit">Sign Up</button>
            </form>
            <p>Already have an account?</p>
            <link to={"/login"}>Login</link> 
        </>
    )
}