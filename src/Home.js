import React from 'react';
import './styles.css';
import Menu from './componentes/Menu';

const Home = () => {
  return (
    <>
      <Menu/>
      <div className="contenido-home">
        <img src="/imagenes/imgNews.jpeg" className='News' alt="news"/>
        <img src="/imagenes/imgPrincipal.jpeg" className='imgPrincipal' alt="imagenprincipal"/>
        <img src="/imagenes/imgMasVendidas.jpeg" className='MV' alt="mas vendidas"/>
      </div>
    </>
  )
}

export default Home
