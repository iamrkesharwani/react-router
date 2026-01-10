import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Card = ({ id, title, body }) => {
  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg p-6 hover:border-slate-700 transition-colors">
      <div className="flex items-start justify-between gap-4 mb-3">
        <h2 className="text-xl font-semibold text-white flex-1">{title}</h2>
        <span className="text-slate-500 text-sm font-medium">#{id}</span>
      </div>
      <p className="text-slate-400 mb-4 leading-relaxed">{body}</p>
      <Link
        to={`/post/${id}`}
        className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium transition-colors"
      >
        Read more
        <ArrowRight className="w-4 h-4" />
      </Link>
    </div>
  );
};

export default Card;
