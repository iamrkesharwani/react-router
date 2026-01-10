import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { useEffect, useState } from 'react';
import { LogIn, Mail, Lock, AlertCircle } from 'lucide-react';

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

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard');
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-8">
      <div className="w-full max-w-md">
        <div className="flex items-center gap-3 mb-8 justify-center">
          <LogIn className="w-8 h-8 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Login</h1>
        </div>

        <form
          onSubmit={handleLogin}
          className="bg-slate-900 border border-slate-800 rounded-lg p-6 space-y-4"
        >
          <div>
            <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-3">
              <Mail className="w-5 h-5 text-slate-500" />
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent text-white placeholder-slate-500 outline-none flex-1"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 bg-slate-800 rounded-lg px-4 py-3">
              <Lock className="w-5 h-5 text-slate-500" />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="bg-transparent text-white placeholder-slate-500 outline-none flex-1"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
          >
            Login
          </button>
        </form>

        {error && (
          <div className="mt-4 flex items-center gap-2 text-red-400 bg-red-950 border border-red-900 rounded-lg px-4 py-3">
            <AlertCircle className="w-5 h-5" />
            <p>{error}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
