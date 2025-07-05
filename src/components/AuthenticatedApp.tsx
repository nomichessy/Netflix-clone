
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Index from '@/pages/Index';
import MyList from '@/pages/MyList';
import NotFound from '@/pages/NotFound';

const AuthenticatedApp = () => {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/my-list" element={<MyList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AuthenticatedApp;
