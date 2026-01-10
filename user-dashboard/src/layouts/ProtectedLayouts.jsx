import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

const ProtectedLayouts = () => {
  const { logout } = useAuth();

  return (
    <div>
      <nav className="flex gap-10">
        <NavLink to="/dashboard">Dashboard</NavLink>
        <NavLink to="/profile">Profile</NavLink>
        <NavLink to="/settings">Settings</NavLink>
        <button onClick={logout}>Logout</button>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayouts;
