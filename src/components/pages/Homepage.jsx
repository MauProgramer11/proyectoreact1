import React from "react";
import CarList from "../components/CarList";

const HomePage = ({ cars }) => {
  return (
    <div>
      <h1>Lista de Autos</h1>
      <CarList cars={cars} />
    </div>
  );
};

export default HomePage;
