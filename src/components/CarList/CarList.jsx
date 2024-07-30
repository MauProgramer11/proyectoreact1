import React, { useState } from "react";
import CarItem from "./CarItem";

const cars = [
  {
    id: 1,
    name: "Tesla Model S",
    description: "Sedán eléctrico con tecnología avanzada y gran autonomía.",
    price: 94000,
    elegance: 6,
    image:
      "https://cdn.motor1.com/images/mgl/Y6K7o/s1/2021-tesla-model-s-plaid.jpg",
  },
  {
    id: 2,
    name: "Porsche 911",
    description:
      "Icono del automovilismo con diseño atemporal y rendimiento excepcional.",
    price: 115000,
    elegance: 8,
    image:
      "https://cdn.motor1.com/images/mgl/6OKGn/s1/2022-porsche-911-turbo-s.jpg",
  },
  {
    id: 3,
    name: "BMW 7 Series",
    description:
      "Sedán de lujo con tecnología de vanguardia y confort supremo.",
    price: 87000,
    elegance: 7,
    image: "https://cdn.motor1.com/images/mgl/0OjqX/s1/bmw-7-series.jpg",
  },
  {
    id: 4,
    name: "Mercedes-Benz S-Class",
    description:
      "Símbolo de lujo y sofisticación con interiores de primera clase.",
    price: 111000,
    elegance: 9,
    image:
      "https://cdn.motor1.com/images/mgl/R0KRn/s1/2021-mercedes-benz-s-class.jpg",
  },
  {
    id: 5,
    name: "Audi A8",
    description:
      "Sedán de lujo con tecnología innovadora y un diseño elegante.",
    price: 86000,
    elegance: 7,
    image: "https://cdn.motor1.com/images/mgl/YqxW4/s1/2022-audi-a8.jpg",
  },
  {
    id: 6,
    name: "Jaguar XJ",
    description:
      "Sedán de lujo con un diseño distintivo y un enfoque en el confort.",
    price: 75000,
    elegance: 6,
    image: "https://cdn.motor1.com/images/mgl/XJpGJ/s1/jaguar-xj.jpg",
  },
  {
    id: 7,
    name: "Maserati Quattroporte",
    description:
      "Elegante sedán italiano con un enfoque en el rendimiento y la exclusividad.",
    price: 105000,
    elegance: 8,
    image:
      "https://cdn.motor1.com/images/mgl/oZxF4/s1/maserati-quattroporte.jpg",
  },
  {
    id: 8,
    name: "Lexus LS",
    description:
      "Sedán de lujo japonés con una combinación de confort y tecnología.",
    price: 80000,
    elegance: 7,
    image: "https://cdn.motor1.com/images/mgl/1n5GP/s1/2021-lexus-ls.jpg",
  },
  {
    id: 9,
    name: "Bentley Continental GT",
    description: "Gran turismo de lujo con una mezcla de elegancia y potencia.",
    price: 231000,
    elegance: 10,
    image:
      "https://cdn.motor1.com/images/mgl/2K4rx/s1/bentley-continental-gt.jpg",
  },
  {
    id: 10,
    name: "Rolls-Royce Ghost",
    description:
      "Símbolo absoluto de lujo y sofisticación con un diseño majestuoso.",
    price: 332000,
    elegance: 10,
    image: "https://cdn.motor1.com/images/mgl/Bw3R4/s1/rolls-royce-ghost.jpg",
  },
];

const CarList = () => {
  const [sortOrder, setSortOrder] = useState("asc"); // 'asc' o 'desc'

  const sortedCars = [...cars].sort((a, b) => {
    return sortOrder === "asc"
      ? a.elegance - b.elegance
      : b.elegance - a.elegance;
  });

  return (
    <div>
      <button
        onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
      >
        Ordenar por elegancia (
        {sortOrder === "asc" ? "Ascendente" : "Descendente"})
      </button>
      <div className="car-list">
        {sortedCars.map((car) => (
          <CarItem key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default CarList;
