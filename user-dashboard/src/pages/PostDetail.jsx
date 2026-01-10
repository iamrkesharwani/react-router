import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPostById } from '../api/postApi';
import Loading from '../components/Loading';
import Error from '../components/Error';
import { ArrowLeft } from 'lucide-react';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, isError, isLoading } = useQuery({
    queryKey: ['post', id],
    queryFn: () => fetchPostById(id),
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          Go back
        </button>

        <div className="bg-slate-900 border border-slate-800 rounded-lg p-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-slate-500 text-sm font-medium">
              Post #{id}
            </span>
          </div>
          <h1 className="text-3xl font-bold text-white mb-4">{data.title}</h1>
          <p className="text-slate-400 leading-relaxed">{data.body}</p>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
