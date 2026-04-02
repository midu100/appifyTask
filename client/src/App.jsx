import React from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Navigate } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Landing from './pages/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import Feed from './pages/Feed';

function App() {
  const myRoute = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feed" element={<MainLayout />}>
          <Route index element={<Feed />} />
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    )
  );

  return <RouterProvider router={myRoute} />;
}

export default App;
