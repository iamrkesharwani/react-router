import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-sm border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-center h-20">
          <div className="flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `relative px-6 py-3 text-base font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `relative px-6 py-3 text-base font-medium ${
                  isActive
                    ? 'text-blue-600'
                    : 'text-slate-600 hover:text-slate-900'
                }`
              }
            >
              About
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
