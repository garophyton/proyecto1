import React from "react";
import "../styles.css";

const Card = ({ imageUrl, price, onBuy, onDetails }) => {
  return (
    <div className="card">
      <img src={imageUrl} alt="Product" className="card-image" />
      <div style={{padding: '10px'}}>
        <h3 className="card-price">${price}</h3>
        <div style={{display: 'flex', justifycontent: 'space-around'}}>
          <button onClick={onBuy} className="btn buy-btn">Comprar</button>
          <button onClick={onDetails} className="btn details-btn">Detalles</button>
        </div>
      </div>
    </div>
  );
};

export default Card;