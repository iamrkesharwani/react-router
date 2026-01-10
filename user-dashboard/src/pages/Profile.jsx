import { User } from 'lucide-react';

const Profile = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <User className="w-7 h-7 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Profile</h1>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <p className="text-slate-400">Your profile information</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
