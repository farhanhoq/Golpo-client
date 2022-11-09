import React, { createContext } from 'react';

export const authContext = createContext();

const AuthProvider = ({children}) => {

    const authInfo = {};

    return (
        <div>
            <authContext.Provider value={authInfo}>
                {children}
            </authContext.Provider>
        </div>
    );
};

export default AuthProvider;