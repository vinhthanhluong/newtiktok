import { createContext, useContext, useState } from 'react';

const NotifyContext = createContext();

export function UserNotify() {
    return useContext(NotifyContext);
}

export function NotifyProvider({ children }) {
    const [infoNotify, setInfoNotify] = useState({
        content: '',
        success: false,
        error: false,
        delay: 2000,
        isNotify: false,
    });

    const value = {
        infoNotify,
        setInfoNotify,
    };

    return <NotifyContext.Provider value={value}>{children}</NotifyContext.Provider>;
}
