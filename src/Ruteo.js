import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './Home';
import Catalogo from './Catalogo';
import Info from './Info';


const Routing = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/Catalogo" element={<Catalogo/>}/>
          <Route path="/Info" element={<Info />} />
          <Route path="/" element={<Navigate to="/Home" />}/>
        </Routes>
      </div>
    </Router>
  );
};
export default Routing
  
