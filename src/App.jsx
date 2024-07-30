import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [cars] = useState([
    {
      id: 1,
      make: "Toyota",
      model: "Corolla",
      price: "$10,000",
      description: "Auto confiable y económico",
      image:
        "https://media.toyota.com.ar/3bd8934e-b2d4-48f1-be31-54a410ad31a0.png",
    },
    {
      id: 2,
      make: "Toyota",
      model: "Corolla Cross",
      price: "$12,000",
      description: "Auto suv",
      image:
        "https://media.toyota.com.ar/0b05de0e-680f-48e8-9b47-ad17d06c691b.png",
    },
    {
      id: 3,
      make: "Ford",
      model: "Mustang",
      price: "$25,000",
      description: "Auto potente y clásico",
      image:
        "https://www.ford.com.ar/content/dam/Ford/website-assets/latam/ar/nameplate/mustang/mustang-2021/models/gt/far-mustang-gt-vehicle-group.png",
    },
    {
      id: 4,
      make: "Chevrolet",
      model: "Camaro",
      price: "$28,000",
      description: "Auto deportivo y moderno",
      image:
        "https://http2.mlstatic.com/D_NQ_NP_853835-MLA77597529921_072024-O.webp",
    },
    {
      id: 5,
      make: "BMW",
      model: "M3",
      price: "$45,000",
      description: "Auto de lujo y alto rendimiento",
      image:
        "https://imgs.search.brave.com/CMPsmDmReM4YvDKAQqLmh6eQVGyyuMEcpYNMaGhXLuc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jYXJz/YWxlcy5weGNydXNo/Lm5ldC9jYXJzYWxl/cy9jYXIvcHJpdmF0/ZS85Mzl1anVqdWhh/dDFpNHdvZGJnZXFz/bjU5LmpwZz9weGNf/bWV0aG9kPWNyb3Am/cHhjX3NpemU9Mzgw/LDI1Mg",
    },
  ]);
  const [selectedCar, setSelectedCar] = useState(null);
  const [contactFormVisible, setContactFormVisible] = useState(false);

  const showCarDetails = (car) => {
    setSelectedCar(car);
    setContactFormVisible(false);
  };

  const showContactForm = () => {
    setContactFormVisible(true);
    setSelectedCar(null);
  };

  return (
    <div>
      <header className="header">
        <div className="logo">Venta Autos</div>
        <nav className="nav">
          <ul>
            <li>
              <a
                href="#"
                onClick={() => {
                  setSelectedCar(null);
                  setContactFormVisible(false);
                }}
              >
                Inicio
              </a>
            </li>
            <li>
              <a href="#" onClick={showContactForm}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <main className="container">
        {!selectedCar && !contactFormVisible && (
          <div className="car-list">
            {cars.map((car) => (
              <div key={car.id}>
                <img
                  src={car.image}
                  alt={`${car.make} ${car.model}`}
                  className="car-image"
                />
                <h2>
                  {car.make} {car.model}
                </h2>
                <p>{car.price}</p>
                <a href="#" onClick={() => showCarDetails(car)}>
                  Ver detalles
                </a>
              </div>
            ))}
          </div>
        )}
        {selectedCar && (
          <div className="car-details">
            <img
              src={selectedCar.image}
              alt={`${selectedCar.make} ${selectedCar.model}`}
              className="car-image-large"
            />
            <h2>
              {selectedCar.make} {selectedCar.model}
            </h2>
            <p>Precio: {selectedCar.price}</p>
            <p>Descripción: {selectedCar.description}</p>
          </div>
        )}
        {contactFormVisible && (
          <div className="contact-form">
            <form>
              <div>
                <label>Nombre</label>
                <input type="text" required />
              </div>
              <div>
                <label>Email</label>
                <input type="email" required />
              </div>
              <div>
                <label>Mensaje</label>
                <textarea required></textarea>
              </div>
              <button type="submit">Enviar</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
