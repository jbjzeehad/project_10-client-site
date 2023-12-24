import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../../FireBase/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

export const Authcontxt = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProviders = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    const logInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logInwithGoogle = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    const logOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            unSubscribe();
        }
    }, [])

    const authinfo = {
        user, createUser, logInUser, logInwithGoogle, logOutUser, loading
    };
    return (
        <Authcontxt.Provider value={authinfo}>
            {children}
        </Authcontxt.Provider>
    );
};

export default AuthProviders;

AuthProviders.propTypes = {
    children: PropTypes.node
}


