import React from 'react';
import { useNavigate } from 'react-router-dom';

function CBNavigation({ to, children }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(to);
  };

  return (
    <button onClick={handleClick} className="buttonsM">
      {children}
    </button>
  );
}
export default CBNavigation