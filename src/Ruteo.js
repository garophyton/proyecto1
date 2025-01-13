import React from 'react';
import { Routes ,Route, Navigate } from 'react-router-dom';  // Solo importa Route y Navigate, no HashRouter
import Home from './Home';
import Catalogo from './Catalogo';
import Info from './Info';

const Routing = () => {
  return (
    <Routes>
      <Route path="/Home" element={<Home />} />
      <Route path="/Catalogo" element={<Catalogo />} />
      <Route path="/Info" element={<Info />} />
      <Route path="/" element={<Navigate to="/Home" />} />
    </Routes>
  );
};

export default Routing;

