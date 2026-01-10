import { Loader2 } from 'lucide-react';

const Loading = () => {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="flex items-center gap-3 text-slate-400">
        <Loader2 className="w-6 h-6 animate-spin" />
        <p className="text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
};

export default Loading;
