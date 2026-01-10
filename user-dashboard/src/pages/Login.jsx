import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { useState } from 'react';

const Login = () => {
  const { login, error, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();

    const success = login(email, password);
    if (success) navigate('/dashboard');
  };

  if (isAuthenticated) {
    navigate('/dashboard');
    return null;
  }

  return (
    <div>
      <p>Login</p>
      <form onSubmit={handleLogin}>
        <input
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>

      {error && <p className="text-red-600">{error}</p>}
    </div>
  );
};

export default Login;
