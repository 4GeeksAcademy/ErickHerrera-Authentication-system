import React from "react";
import { Link, useLocation } from "react-router-dom";

export const Navbar = () => {
    const location = useLocation(); 
    if (location.pathname === "/private") {
        return null; 
    }

    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container">
                {location.pathname !== "/signup" && (
                    <Link to="/signup">
                        <button className="btn btn-primary">Signup</button>
                    </Link>
                )}
                
                <div className="ml-auto">
                    {location.pathname !== "/login" && (
                        <Link to="/login">
                            <button className="btn btn-primary">Login</button>
                        </Link>
                    )}
                </div>
            </div>
        </nav>
    );
};
