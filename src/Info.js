import React from 'react';
import Menu from './componentes/Menu'
import './styles.css'


const Info = () => {
  const imgfondoCard = <img src="./imagenes/gris.jpeg"  alt="fondo-card" style={{height:'190px',width:'130px'}} />;
return (
  <div style={{minHeight:'100vh' , display: 'flex', flexDirection: 'column'}}>
      <Menu/>
    <div style={{display:'flex',width:'100%',minHeight:'100vh',alignItems:'center',justifyContent:'center',transform: 'translateY(-10%)'}}>
      <div className='ctext'>
        <div style={{zIndex:'1', position:'absolute',top: '50%',left:'50%',transform: 'translate(-50%, -50%)'}}>
          {imgfondoCard}
        </div>
        <div style={{zIndex:'2', position:'relative',color:'white'}}>
          <h1 style={{height:'20%'}}>
            reclamos
          </h1>
          <div>
            Email:
            xxxxxx@gmail.com  
          </div>
          <div>
            nro:
            xxxxxx
          </div>
          <div>
            horario de atencion:
            xx/xx
          </div>
        </div>
      </div>
      <div className='ctext'>
        <div style={{zIndex:'1', position:'absolute',top: '50%',left:'50%',transform: 'translate(-50%, -50%)'}}>
          {imgfondoCard}
        </div>
        <div style={{zIndex:'2', position:'relative',color:'white'}}>
          <h2 style={{height:'20%'}}>
            cv, coperaciones y negocios
          </h2>
          <div>
            Email:
            yyyyyx@gmail.com  
          </div>
          <div>
            nro: yyyyy
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Info