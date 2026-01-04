import { useLocation, Link } from 'react-router-dom';

const BreadCrumbs = () => {
  const location = useLocation();
  const pathname = location.pathname.split('/').filter(Boolean);

  return (
    <div>
      <Link to="/">Home</Link>

      {pathname.map((item, index) => {
        const to = '/' + pathname.slice(0, index + 1).join('/');
        const lastIndex = pathname.length - 1;
        const isLast = index === lastIndex;

        return (
          <span key={to}>
            /{isLast ? <span>{item}</span> : <Link to={to}>{item}</Link>}
          </span>
        );
      })}
    </div>
  );
};

export default BreadCrumbs;
