import React, { useState } from 'react';
import { useAuth } from '../model/authContext';
import { login } from '../../../entities/user/api/auth';
import { useNavigate } from 'react-router-dom';
import { Input, Button } from '@material-tailwind/react';

const LoginForm: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const data = await login(username, password);
      setToken(data.access_token);
      navigate('/admin');
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input
          type="text"
          color="blue"
          size="lg"
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}        />
      </div>
      <div>
        <Input
          type="password"
          color="blue"
          size="lg"
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined} crossOrigin={undefined}        />
      </div>
      <Button type="submit" color="blue" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
