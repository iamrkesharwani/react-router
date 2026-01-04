import { useParams, useNavigate } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchPostById } from '../api/postApi';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import Loading from '../components/Loading';
import Error from '../components/Error';

const PageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isLoading, isError } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="bg-slate-50 to-slate-100 py-12">
      <div className="max-w-4xl mx-auto px-4">
        <button
          onClick={() => navigate(-1)}
          className="inline-flex items-center gap-2 text-slate-600 hover:text-blue-600 font-medium mb-8 transition-colors duration-200 group"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-200" />
          Go back
        </button>

        <article className="bg-white rounded-2xl shadow-sm border border-slate-200">
          <div className="p-8 pb-6 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
                {id}
              </span>

              <h1 className="text-3xl font-bold text-slate-900 leading-tight">
                {data.title}
              </h1>
            </div>
          </div>

          <div className="p-8">
            <p className="text-slate-700 leading-relaxed text-lg whitespace-pre-wrap">
              {data.body}
            </p>
          </div>

          <div className="px-8 py-6 bg-slate-50 border-t border-slate-100">
            <div className="flex items-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <User className="w-4 h-4" />
                <span>User {data.userId}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>Post #{id}</span>
              </div>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PageDetail;
