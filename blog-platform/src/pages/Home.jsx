import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/postApi';
import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import Error from '../components/Error';

import { MoveRight } from 'lucide-react';

const Home = () => {
  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Latest Posts
          </h1>
          <p className="text-slate-600">
            Discover our latest content and updates
          </p>
        </div>

        {/* Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {data.map((item) => (
            <article
              key={item.id}
              className="bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden border border-slate-200 flex flex-col"
            >
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-3 mb-4">
                  <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-blue-100 text-blue-600 text-sm font-semibold">
                    {item.id}
                  </span>
                  <span className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Article
                  </span>
                </div>

                <h2 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3 flex-grow">
                  {item.body}
                </p>

                <Link
                  to={`/${item.id}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-lg transition-all duration-200 hover:gap-3 w-full justify-center"
                >
                  Read more
                  <MoveRight />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
