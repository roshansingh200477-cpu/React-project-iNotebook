import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [credentials, setCredentials] = useState({
        email: "",
        password: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(credentials),
            });

            if (!response.ok) {
                throw new Error("Server error");
            }

            const json = await response.json();

            if (json.success) {
                localStorage.setItem("token", json.authtoken);
                navigate("/");
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error(error);
            alert("Something went wrong");
        }

        setLoading(false);
    };

    const onChange = (e) => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value,
        });
    };

    return (
        <div
            className="container d-flex justify-content-center align-items-center vh-100"
            style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)"
            }}
        >
            <div
                className="card p-4 shadow-lg"
                style={{
                    width: "400px",
                    borderRadius: "20px",
                    transition: "0.4s ease",
                    backdropFilter: "blur(10px)"
                }}
                onMouseEnter={e => e.currentTarget.style.transform = "translateY(-5px)"}
                onMouseLeave={e => e.currentTarget.style.transform = "translateY(0px)"}
            >
                <h3 className="text-center mb-4 fw-bold">Welcome Back</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            value={credentials.email}
                            onChange={onChange}
                            required
                        />
                        <label htmlFor="email">Email address</label>
                    </div>

                    <div className="form-floating mb-4">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            value={credentials.password}
                            onChange={onChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <button
                        type="submit"
                        className="btn btn-dark w-100"
                        disabled={loading}
                        style={{
                            borderRadius: "12px",
                            transition: "0.3s",
                            fontWeight: "bold"
                        }}
                        onMouseOver={e => {
                            if (!loading) {
                                e.target.style.transform = "scale(1.05)";
                            }
                        }}
                        onMouseOut={e => {
                            e.target.style.transform = "scale(1)";
                        }}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;