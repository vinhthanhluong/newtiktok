import { createContext, useState } from 'react';

const UserContext = createContext();

function UserProvider({ children }) {
    const [userInfo, setUserInfo] = useState(null);

    return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };
