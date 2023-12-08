// UserContext.jsx
import { createContext, useContext, useState } from 'react';

// Create a context with an initial value (empty object)
const UserContext = createContext({});

// Create a custom hook to use the UserContext
// to be used
export const useUser = () => useContext(UserContext);

// Create a provider component to wrap your application with
export const UserProvider = ({ children }) => {
  // State to store user details
    const [user, setUser] = useState(null);

    // Function to set user details (you can call this after login)
    const loginUser = (userData) => {
        setUser(userData);
    };

    // Function to log out (clear user details)
    const logoutUser = () => {
        setUser(null);
    };

    // Value object to be provided by the context
    const contextValue = {
        user,
        loginUser,
        logoutUser, 
    };

    // Use the UserContext.Provider to wrap the children components
    return (
        <UserContext.Provider value={contextValue}>
        {children}
        </UserContext.Provider>
    );
};
