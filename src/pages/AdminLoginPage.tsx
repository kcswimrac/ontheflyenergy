import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const AdminLoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    const success = await login(username, password);
    if (success) {
      navigate('/admin/editor');
    } else {
      setError('Invalid credentials');
      setPassword('');
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-midnight-black flex items-center justify-center px-6">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-energy-green/10 rounded-full mb-4">
            <Lock className="h-8 w-8 text-energy-green" />
          </div>
          <h1 className="font-montserrat font-bold text-3xl text-industrial-white mb-2">
            Admin Login
          </h1>
          <p className="font-open-sans text-gray-300">
            Access the Insights content editor
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-steel-blue/20 border border-energy-green/20 rounded-lg p-8">
          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg">
              <p className="font-open-sans text-red-400 text-sm">{error}</p>
            </div>
          )}

          <div className="mb-6">
            <label htmlFor="username" className="block font-montserrat text-sm font-medium text-gray-300 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-midnight-black border border-energy-green/20 rounded-lg text-industrial-white font-open-sans focus:outline-none focus:border-energy-green transition-colors"
              required
              autoComplete="username"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block font-montserrat text-sm font-medium text-gray-300 mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-midnight-black border border-energy-green/20 rounded-lg text-industrial-white font-open-sans focus:outline-none focus:border-energy-green transition-colors"
              required
              autoComplete="current-password"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full px-6 py-3 bg-energy-green text-midnight-black font-montserrat font-semibold rounded-lg hover:bg-green-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLoginPage;
