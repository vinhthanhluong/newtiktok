import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function UserAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    // const [userAuthDefault, setUserAuthDefault] = useState(null);
    const [userGoogle, setUserGoogle] = useState(null);
    const [loginTab, setLoginTab] = useState('default');
    const [backAuth, setBackAuth] = useState(true);
    const [openAuth, setOpenAuth] = useState(false);

    const userToken = JSON.parse(localStorage.getItem('token')) ?? '';
    const userAuthDefault = JSON.parse(localStorage.getItem('user-id')) ?? '';

    const value = {
        userAuthDefault,
        userToken,
        userGoogle,
        setUserGoogle,
        loginTab,
        setLoginTab,
        backAuth,
        setBackAuth,
        openAuth,
        setOpenAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
