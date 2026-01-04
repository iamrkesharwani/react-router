import { AlertCircle, RefreshCw } from 'lucide-react';

const Error = () => {
  return (
    <div className="py-20 bg-slate-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-xl p-8 shadow-sm border border-slate-200 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-red-100 rounded-full mb-4">
          <AlertCircle className="w-8 h-8 text-red-600" />
        </div>

        <h2 className="text-2xl font-bold text-slate-900 mb-2">
          Something Went Wrong
        </h2>
        <p className="text-slate-600 mb-6">
          We couldn't load the data. Please try again.
        </p>

        <button
          onClick={() => window.location.reload()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg"
        >
          <RefreshCw className="w-4 h-4" />
          Try Again
        </button>
      </div>
    </div>
  );
};

export default Error;
