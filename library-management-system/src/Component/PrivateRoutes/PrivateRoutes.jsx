import { useContext } from "react";
import { Authcontxt } from "../Providers/AuthProviders";
import PropTypes from 'prop-types';
import { Navigate } from "react-router-dom";


const PrivateRoutes = ({ children }) => {
    const { user } = useContext(Authcontxt);
    if (user) {
        return children;
    }
    return (
        <Navigate to='/login' state={location.pathname}></Navigate>
    );
};

export default PrivateRoutes;

PrivateRoutes.propTypes = {
    children: PropTypes.node
}