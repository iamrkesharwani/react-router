import { Settings as SettingsIcon } from 'lucide-react';

const Settings = () => {
  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <SettingsIcon className="w-7 h-7 text-blue-400" />
          <h1 className="text-3xl font-bold text-white">Settings</h1>
        </div>
        <div className="bg-slate-900 border border-slate-800 rounded-lg p-6">
          <p className="text-slate-400">Configure your preferences</p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
