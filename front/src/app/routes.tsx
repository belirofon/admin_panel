import React from 'react';
import { Route, Routes as RouterRoutes } from 'react-router-dom';
import Login from '../pages/Login';
import AdminPanel from '../pages/AdminPanel';
import ProtectedRoute from '../features/auth/ui/ProtectedRoute';

export const Routes: React.FC = () => (
  <RouterRoutes>
    <Route path="/login" element={<Login />} />
    <Route
      path="/admin"
      element={
        <ProtectedRoute>
          <AdminPanel />
        </ProtectedRoute>
      }
    />
  </RouterRoutes>
);
