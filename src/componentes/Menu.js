import React, { useState } from 'react';
import CBNavigation from './BotonesNavegacion.js';
import '../styles.css'
import ButtonP from './BotonesEstandar.js'
import { useSubmit } from 'react-router-dom';

const Menu = () => {
  const imgLogo = <img src="./imagenes/logo.jpeg" className="logo" alt="logo" />;
  const [showForm, setShowForm] = useState({
    login: false,
    register: false
  });
  
  const handleClick = (formName) => {
    setShowForm((prev) => ({
      login: formName === 'login' ? !prev.login : false,
      register: formName === 'register' ? !prev.register : false
    }));
  };
  return (

      <div className='header'>
        {imgLogo}  
        <div className='menuLateral'>
          <CBNavigation to="/home">Inicio</CBNavigation>
          <CBNavigation to="/Catalogo">Catalogo</CBNavigation>
          <CBNavigation to="/Info">Info</CBNavigation>
          <div>
          <ButtonP className='buttonsM iS' text='iniciar sesion' onClick={() => handleClick('login')}/> 
          {showForm.login && (             
          <form className={`formG ${showForm.login ? 'showForm' : ''}`}>
              <label className='labelF'>Email:</label>
              <input type="email" id="email" name="email" required/>
              <label className='labelF' for="password">Contraseña:</label>
              <input type="password" id="password" name="password" required/>
              <div style={{display: 'flex', justifyContent: 'center', width: '100%'}}>   
              <ButtonP className='buttonsM' text='Ingresar' onClick={useSubmit}/>
              </div>
          </form>           
          )}; 
          </div>
          <div>                  
          <ButtonP className='buttonsM' text='registrate' onClick={() => handleClick('register')}/>
          {showForm.register && (           
          <form className={`formG ${showForm.register ? 'showForm' : ''}`}>                             
              <label className='labelF'>Nombre:</label>
              <input type="text" name="nombre"/>                   
              <label className='labelF'>Apellido:</label>
              <input type="text" name="apellido"/> 
              <label className='labelF'>Email:</label>
              <input type="email" name="email"/>
              <label className='labelF'>Contraseña</label>
              <input type="password" name="contraseña"/>
              <div style={{display: 'flex', justifyContent: 'center', width: '100%' }}>                                       
              <ButtonP className='buttonsM' text='Registrar' onClick={useSubmit}/>    
              </div>                  
          </form>
          )};
          </div>                   
        </div>                        
      </div>
     
  );
};

export default Menu;