import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
    const { actions } = useContext(Context);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await actions.logout(); 
        navigate("/login"); 
    };

    return (
        <div className="container">
            <h1>Bienvenido a la sección privada 🎉</h1>
            <p>Solo los usuarios autenticados pueden ver esto.</p>
            <button onClick={handleLogout} className="btn btn-danger mt-3">
                Cerrar sesión
            </button>
        </div>
    );
};