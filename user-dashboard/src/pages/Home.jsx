import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/postApi';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Card from '../components/Card';
import { Home as HomeIcon } from 'lucide-react';

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <HomeIcon className="w-7 h-7 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Feed</h1>
        </div>
        <div className="space-y-4">
          {data.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
