import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function UserAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [userGoogle, setUserGoogle] = useState(null);
    const [loginTab, setLoginTab] = useState('default');
    const [backAuth, setBackAuth] = useState(true);

    const value = {
        userGoogle,
        setUserGoogle,
        loginTab,
        setLoginTab,
        backAuth,
        setBackAuth,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
