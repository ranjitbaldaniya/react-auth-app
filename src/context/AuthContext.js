import React, { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({
    isAuthenticated: false,
    user: null,
  });

  useEffect(() => {
    // Check for token in localStorage and update authState
    const token = localStorage.getItem('token');
    if (token) {
      // Optionally, verify the token and fetch user data
      setAuthState({
        isAuthenticated: true,
        user: { token }, // Replace with actual user data if available
      });
    }
  }, []);

  const login = (user) => {
    localStorage.setItem('token', user.token);
    setAuthState({
      isAuthenticated: true,
      user,
    });
  };

  const logout = () => {
    localStorage.removeItem('token');
    setAuthState({
      isAuthenticated: false,
      user: null,
    });
  };

  return (
    <AuthContext.Provider value={{ authState, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
