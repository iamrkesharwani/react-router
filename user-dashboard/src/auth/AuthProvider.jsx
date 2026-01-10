import { useEffect, useState } from 'react';
import { AuthContext } from './authContext';

const FAKE_USER = {
  email: 'admin@hello.com',
  password: 'admin@123',
  name: 'Admin User',
};

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');

    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  const login = (email, password) => {
    setError(null);

    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      const loggedInUser = {
        email: FAKE_USER.email,
        name: FAKE_USER.name,
      };

      setUser(loggedInUser);
      setIsAuthenticated(true);
      localStorage.setItem('user', JSON.stringify(loggedInUser));

      return true;
    } else {
      setError('Invalid email or password');
      return false;
    }
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
    error,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
