import React from "react";

const CarItem = ({ car }) => (
  <div className="car-item">
    <img src={car.image} alt={car.name} />
    <h2>{car.name}</h2>
    <p>{car.description}</p>
    <p>${car.price.toLocaleString()}</p>
    <button>Agregar al Carrito</button>
  </div>
);

export default CarItem;
