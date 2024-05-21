import React from 'react';
import LoginForm from '../../features/auth/ui/LoginForm';

const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
