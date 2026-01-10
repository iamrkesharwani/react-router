import { AlertCircle, Home, RefreshCw } from 'lucide-react';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="text-center">
        <div className="flex items-center gap-3 text-red-400 justify-center mb-6">
          <AlertCircle className="w-6 h-6" />
          <p className="text-lg font-medium">Something went wrong</p>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <button
            onClick={() => window.location.reload()}
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <RefreshCw className="w-4 h-4" />
            Retry
          </button>
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-slate-800 text-white px-4 py-2 rounded-lg hover:bg-slate-700 transition-colors"
          >
            <Home className="w-4 h-4" />
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Error;
