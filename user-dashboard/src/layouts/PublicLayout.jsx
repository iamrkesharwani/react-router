import { NavLink, Outlet } from 'react-router-dom';
import { Home, LogIn } from 'lucide-react';

const PublicLayout = () => {
  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="bg-slate-900 border-b border-slate-800 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center gap-8">
          <NavLink
            to="/"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <Home className="w-5 h-5" />
            Home
          </NavLink>
          <NavLink
            to="/login"
            className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
          >
            <LogIn className="w-5 h-5" />
            Login
          </NavLink>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
