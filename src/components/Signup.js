import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = (props) => {
    const [credentials, setCredentials] = useState({
        name: "", email: "", password: "", cpassword: ""
    });

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (credentials.password !== credentials.cpassword) {
            alert("Passwords do not match");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/auth/createuser", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: credentials.name,
                    email: credentials.email,
                    password: credentials.password
                }),
            });

            const json = await response.json();

            if (json.success) {
                localStorage.setItem("token", json.authtoken);
                props.showAlert("Account created successfully", "success");
                navigate("/");
            } else {
                alert("Invalid credentials");
            }
        } catch (error) {
            console.error(error);
            alert("Server error");
        }
    };

    const onChange = (e) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value });
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100" style={{
                background: "linear-gradient(135deg, #667eea, #764ba2)"
            }}>
            
            <div 
                className="card p-4 shadow-lg"
                style={{
                    width: "400px",
                    borderRadius: "15px",
                    transition: "all 0.3s ease-in-out"
                }}
            >
                <h3 className="text-center mb-4 fw-bold">Create Account</h3>

                <form onSubmit={handleSubmit}>
                    <div className="form-floating mb-3">
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            onChange={onChange}
                            required
                        />
                        <label htmlFor="name">Full Name</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            onChange={onChange}
                            required
                        />
                        <label htmlFor="email">Email address</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            name="password"
                            placeholder="Password"
                            minLength={5}
                            onChange={onChange}
                            required
                        />
                        <label htmlFor="password">Password</label>
                    </div>

                    <div className="form-floating mb-3">
                        <input
                            type="password"
                            className="form-control"
                            id="cpassword"
                            name="cpassword"
                            placeholder="Confirm Password"
                            minLength={5}
                            onChange={onChange}
                            required
                        />
                        <label htmlFor="cpassword">Confirm Password</label>
                    </div>

                    <button 
                        type="submit" 
                        className="btn btn-dark w-100"
                        style={{
                            borderRadius: "10px",
                            transition: "0.3s"
                        }}
                        onMouseOver={e => e.target.style.transform = "scale(1.05)"}
                        onMouseOut={e => e.target.style.transform = "scale(1)"}
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Signup;