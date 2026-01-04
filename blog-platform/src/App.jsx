import BreadCrumbs from './components/BreadCrumbs';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div>
      <Navbar />
      <BreadCrumbs />
      <AppRoutes />
    </div>
  );
};

export default App;
