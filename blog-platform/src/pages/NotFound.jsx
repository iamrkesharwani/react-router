import { Home, AlertCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="bg-slate-50 flex items-center justify-center px-4 pt-6">
      <div className="max-w-2xl w-full text-center">
        <div className="mb-8 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-blue-600 rounded-3xl flex items-center justify-center">
              <AlertCircle className="w-16 h-16 text-white" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <h1 className="text-8xl font-bold text-blue-600 mb-4">404</h1>
          <h2 className="text-3xl font-bold text-slate-900 mb-3">
            Page Not Found
          </h2>
          <p className="text-lg text-slate-600 max-w-md mx-auto">
            Oops! The page you're looking for doesn't exist. It might have been
            moved or deleted.
          </p>
        </div>

        <div className="mt-8">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl"
          >
            <Home className="w-5 h-5" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
