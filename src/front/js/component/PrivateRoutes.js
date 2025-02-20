import React, { useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../store/appContext";

const PrivateRoute = ({ children }) => {
    const { store } = useContext(Context);

    if (!store.token) {
        return <Navigate to="/login" />;
    }

    return children;
};

export default PrivateRoute;
