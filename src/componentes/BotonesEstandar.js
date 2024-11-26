import React from 'react';

const ButtonP = ({ text, onClick, className , type = "button",  }) => {
    return (
      <button type={type} onClick={onClick} className={className} >
        {text}
      </button>
    );
};

export default ButtonP