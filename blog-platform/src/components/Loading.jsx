import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="bg-slate-50 flex items-center justify-center px-4 py-44">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
        <p className="text-slate-600 font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
