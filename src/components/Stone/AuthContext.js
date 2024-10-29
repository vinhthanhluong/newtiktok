import { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';

const AuthContext = createContext();

export function UserAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [userGoogle, setUserGoogle] = useState(null);
    const [loginDeafult, setLoginDeafult] = useState(false);

    const value = {
        userGoogle,
        setUserGoogle,
        loginDeafult,
        setLoginDeafult,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
};
