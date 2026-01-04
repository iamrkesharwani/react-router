import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <NavLink
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        style={({ isActive }) => ({ fontWeight: isActive ? 'bold' : 'normal' })}
        to="/about"
      >
        About
      </NavLink>
    </nav>
  );
};

export default Navbar;
