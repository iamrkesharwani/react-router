import { Link } from 'react-router-dom';

const Card = ({ id, title, body }) => {
  return (
    <div>
      <p>{id}</p>
      <p>{title}</p>
      <p>{body}</p>
      <Link to={`/${id}`}>Read more</Link>
    </div>
  );
};

export default Card;
