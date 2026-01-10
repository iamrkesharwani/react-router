import { useQuery } from '@tanstack/react-query';
import { fetchPosts } from '../api/postApi';
import Loading from '../components/Loading';
import Error from '../components/Error';
import Card from '../components/Card';

const Home = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: fetchPosts,
  });

  if (isLoading) return <Loading />;
  if (isError) return <Error />;

  return (
    <div>
      {data.map((item) => (
        <Card {...item} />
      ))}
    </div>
  );
};

export default Home;
