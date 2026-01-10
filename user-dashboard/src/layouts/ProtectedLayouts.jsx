import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';
import { LayoutDashboard, User, Settings, LogOut, Home } from 'lucide-react';

const ProtectedLayouts = () => {
  const { logout } = useAuth();

  return (
    <div className="min-h-screen bg-slate-950">
      <nav className="bg-slate-900 border-b border-slate-800 px-8 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Home className="w-5 h-5" />
              Home
            </NavLink>
            <NavLink
              to="/dashboard"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <LayoutDashboard className="w-5 h-5" />
              Dashboard
            </NavLink>
            <NavLink
              to="/profile"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <User className="w-5 h-5" />
              Profile
            </NavLink>
            <NavLink
              to="/settings"
              className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors"
            >
              <Settings className="w-5 h-5" />
              Settings
            </NavLink>
          </div>
          <button
            onClick={logout}
            className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </button>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayouts;
