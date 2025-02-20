import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: "",
        first_name: "", 
        last_name: ""  
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSignup = async (e) => {
        e.preventDefault();
        const success = await actions.signup(data.email, data.password, data.first_name, data.last_name); // Pasar los nuevos datos
        if (success) {
            navigate("/login"); 
        } else {
            alert("Error during signup. Please try again.");
        }
    };

    return (
        <div className="container">
            <h2>Signup</h2>
            <form onSubmit={handleSignup}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="email" 
                        name="email" 
                        value={data.email} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input 
                        type="password" 
                        className="form-control" 
                        id="password" 
                        name="password" 
                        value={data.password} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="first_name" className="form-label">First Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="first_name" 
                        name="first_name" 
                        value={data.first_name} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="last_name" className="form-label">Last Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="last_name" 
                        name="last_name" 
                        value={data.last_name} 
                        onChange={handleChange}
                        required 
                    />
                </div>
                <button type="submit" className="btn btn-primary">Sign Up</button>
            </form>
            <p className="mt-3">
                Already have an account? <Link to="/login">Login here</Link>
            </p>
        </div>
    );
};
