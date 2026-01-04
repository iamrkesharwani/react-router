import { useLocation, Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const BreadCrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);

  return (
    <nav className="bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <ol className="flex items-center gap-2 text-sm">
          <li>
            <Link
              to="/"
              className="flex items-center gap-1.5 text-slate-600 hover:text-blue-600 transition-colors duration-200 group"
            >
              <Home className="w-4 h-4 group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">Home</span>
            </Link>
          </li>

          {pathname.map((item, index) => {
            const to = '/' + pathname.slice(0, index + 1).join('/');
            const lastIndex = pathname.length - 1;
            const isLast = index === lastIndex;
            const label = item.charAt(0).toUpperCase() + item.slice(1);

            return (
              <li key={to} className="flex items-center gap-2">
                <ChevronRight className="w-4 h-4 text-slate-400" />
                {isLast ? (
                  <span className="text-slate-900 font-semibold">{label}</span>
                ) : (
                  <Link
                    to={to}
                    className="text-slate-600 hover:text-blue-600 font-medium transition-colors duration-200 hover:underline underline-offset-2"
                  >
                    {label}
                  </Link>
                )}
              </li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
};

export default BreadCrumbs;
