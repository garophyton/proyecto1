import React, { useState } from 'react';
import Menu from './componentes/Menu';
import './styles.css';
import Card from './componentes/Card';

const Catalogo = () => {
  const [openFormIndex, setOpenFormIndex] = useState(null);

  const toggleForm = (index) => {
    setOpenFormIndex(openFormIndex === index ? null : index);
  };

  return (
    <div>
      <Menu />
      <div className="pxdiv">
        <div className="card-container">
          <Card imageUrl={'imagenes/products.jpeg'} price={'45'} onDetails={() => toggleForm(0)} />
          <div className={`form-container ${openFormIndex === 0 ? 'open' : ''}`}>
            <form className="formCard">
              <div style={{ color: 'white', fontSize: 'medium' }}>
                Billetera color marrón oscuro
              </div>
              <label style={{ color: 'white', fontSize: 'medium' }}>
                Temporada otoño 2024
              </label>
            </form>
          </div>
        </div>
        <div className="card-container">
          <Card imageUrl={'imagenes/cartera1.jpeg'} price={'65'} onDetails={() => toggleForm(1)} />
          <div className={`form-container ${openFormIndex === 1 ? 'open' : ''}`}>
            <form className="formCard">
              <div style={{ color: 'white', fontSize: 'medium' }}>
                cartera color marrón oscuro
              </div>
              <label style={{ color: 'white', fontSize: 'medium' }}>
                Temporada otoño 2024
              </label>
            </form>
          </div>
        </div>
        <div className="card-container">
          <Card imageUrl={'imagenes/cartera2.jpeg'} price={'60'} onDetails={() => toggleForm(2)} />
          <div className={`form-container ${openFormIndex === 2 ? 'open' : ''}`}>
            <form className="formCard">
              <div style={{ color: 'white', fontSize: 'medium' }}>
                cartera color negro brillante
              </div>
              <label style={{ color: 'white', fontSize: 'medium' }}>
                Temporada invierno 2024
              </label>
            </form>
          </div>
        </div>
        <div className="card-container">
          <Card imageUrl={'imagenes/cartera3.jpeg'} price={'70'} onDetails={() => toggleForm(3)} />
          <div className={`form-container ${openFormIndex === 3 ? 'open' : ''}`}>
            <form className="formCard">
              <div style={{ color: 'white', fontSize: 'medium' }}>
                cartera color negro y blanco
              </div>
              <label style={{ color: 'white', fontSize: 'medium' }}>
                Temporada invierno 2024
              </label>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;