import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "./AuthContext";

const PrivateRoutes = () => {
    const { user } = useAuth();
    return user ? <Outlet/> : <Navigate to="/logIn"/>
}

export default PrivateRoutes;
