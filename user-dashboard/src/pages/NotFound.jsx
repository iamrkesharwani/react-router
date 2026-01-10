import { Link } from 'react-router-dom';
import { Home, FileQuestion } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <FileQuestion className="w-16 h-16 text-slate-600 mx-auto mb-4" />
        <h1 className="text-6xl font-bold text-white mb-2">404</h1>
        <p className="text-slate-400 text-lg mb-6">Page not found</p>
        <Link
          to="/"
          className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
        >
          <Home className="w-4 h-4" />
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
