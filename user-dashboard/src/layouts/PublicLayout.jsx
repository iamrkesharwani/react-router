import { NavLink, Outlet } from 'react-router-dom';

const PublicLayout = () => {
  return (
    <main>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/login">Login</NavLink>
      </nav>
      <main>
        <Outlet />
      </main>
    </main>
  );
};

export default PublicLayout;
