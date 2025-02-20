import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
    const { store, actions } = useContext(Context);
    const navigate = useNavigate(); 
    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        const success = await actions.login(data.email, data.password);
        if (success) {
            navigate("/private"); 
        } else {
            alert("Email o contraseña incorrectos");
        }
    };
    useEffect(() => {
        if (store.token) {
            navigate("/private");
        }
    }, [store.token]);

    return (
        <div className="container">
            <form onSubmit={handleLogin}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                        <input 
                            type="email" 
                            className="form-control" 
                            id="inputEmail3" 
                            name="email" 
                            value={data.email} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                        <input 
                            type="password" 
                            className="form-control" 
                            id="inputPassword3" 
                            name="password" 
                            value={data.password} 
                            onChange={handleChange} 
                            required 
                        />
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    );
};
