import { NavLink, Outlet } from 'react-router-dom';
import { useAuth } from '../auth/useAuth';

const ProtectedLayouts = () => {
  const { user, logout } = useAuth();

  return (
    <div>
      <aside>
        <p>Logged in as: {user?.name}</p>

        <nav>
          <ul className="flex flex-wrap gap-10">
            <li>
              <NavLink to="/dashboard">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/profile">Profile</NavLink>
            </li>
            <li>
              <NavLink to="/settings">Settings</NavLink>
            </li>
            <button onClick={logout}>Logout</button>
          </ul>
        </nav>
      </aside>

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default ProtectedLayouts;
