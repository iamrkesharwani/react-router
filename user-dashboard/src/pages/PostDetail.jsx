import { useQuery } from '@tanstack/react-query';
import { useNavigate, useParams } from 'react-router-dom';
import { fetchPostById } from '../api/postApi';
import Loading from '../components/Loading';
import Error from '../components/Error';

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
    <div>
      <button onClick={() => navigate(-1)}>Go back</button>
      <p>{id}</p>
      <p>{data.title}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default PostDetail;
