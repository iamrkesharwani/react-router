import { Route, Routes } from 'react-router-dom';
import ProtectedRoutes from './ProtectedRoutes';
import ProtectedLayouts from '../layouts/ProtectedLayouts';
import PublicLayout from '../layouts/PublicLayout';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile';
import Settings from '../pages/Settings';
import NotFound from '../pages/NotFound';
import PostDetail from '../pages/PostDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/post/:id" element={<PostDetail />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      <Route element={<ProtectedRoutes />}>
        <Route element={<ProtectedLayouts />}>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/settings" element={<Settings />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRoutes;
