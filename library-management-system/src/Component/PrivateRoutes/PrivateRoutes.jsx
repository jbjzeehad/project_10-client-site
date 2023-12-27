import { useContext } from "react";
import { Authcontxt } from "../Providers/AuthProviders";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user, loading } = useContext(Authcontxt);

    if (loading) {
        return <progress className="progress w-full bg-violet-500"></progress>;
    }
    if (user?.email) {
        return children;
    }
    return <Navigate to='/login' replace></Navigate>;

};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}