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
        setTimeout(() => {
            navigate("/dashboard");
        }, 500)
         
    }

    return (

        <section className="py-5 bg-dark">
            <div className="container sign-container my-md-4">
                <div className="text-center mb-1">
                    <h2 className="text-bold">Sign in</h2>
                </div>
                <div className="card bg-dark border-0 shadow-sm rounded p-4 p-md-5">
                    <form onSubmit={ handleSubmitForm }>
                        <div className="form-floating mb-3">
                            <input type="text" className="form-control bg-lighter" id="email" name="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                            <label>Email</label>
                        </div>
                        <div className="form-floating mb-3">
                            <input type="password" className="form-control bg-lighter" id="password" name="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                            <label>Password</label>
                        </div>
                        <div className="d-flex justify-content-center pb-4">
                            <Link to={"/signup"}>Forgot Password?</Link>
                        </div>
                        <button type="submit" className="btn btn-primary w-100">Login</button>
                        <Link to={"/signup"}><button type="submit" className="btn btn-outline-primary w-100 mt-3">Signup</button></Link>
                    </form>
                </div>
            </div>
        </section>

    )
}