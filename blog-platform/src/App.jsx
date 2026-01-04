import BreadCrumbs from './components/BreadCrumbs';
import Navbar from './components/Navbar';
import AppRoutes from './routes/AppRoutes';

const App = () => {
  return (
    <div className='min-h-screen bg-slate-50'>
      <Navbar />
      <BreadCrumbs />
      <AppRoutes />
    </div>
  );
};

export default App;
