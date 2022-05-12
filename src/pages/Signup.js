import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user.context";

import { signup, login } from "../api";

export const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { storeToken, authenticateUser } = useContext(UserContext);

    const navigate = useNavigate();

    const handleSubmitForm = async (e) => {
        e.preventDefault();
        await signup({ password, email });
        const response = await login({ email, password })
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
    }

    return (
        <>
            <section className="py-5 bg-light">
                <div className="container sign-container my-md-4">
                    <div className="text-center mb-4">
                        <h2>Sign up to Coinbutter</h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                        Or
                        <Link to={"/login"}>Sign in if you have an account?</Link>
                        </p>
                    </div>
                    <div className="card border-0 shadow-sm rounded p-4 p-md-5">
                        <form onSubmit={ handleSubmitForm } method="POST">
                            <div className="form-floating mb-3">
                                <input type="email" className="form-control shadow-sm" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                                <label>Email address *</label>
                            </div>
                            <div className="form-floating mb-4">
                                <input type="password" className="form-control shadow-sm {{#if errorMessage.password}}is-invalid{{/if}}" id="password" name="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                                <label>Password *</label>
                            <div id="passwordHelp" className="form-text small text-center mt-2">Password must be at least 8 chars and must contain at least one number, one lowercase and one uppercase letter.</div>
                            </div>
                            <button type="submit" className="btn btn-primary w-100 btn-lg">Sign Up</button>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}