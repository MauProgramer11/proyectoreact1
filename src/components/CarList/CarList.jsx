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
      "https://static-assets.tesla.com/configurator/compositor?context=design_studio_2&options=$MTS18,$PPSW,$WS90,$IBE00&view=FRONT34&model=ms&size=1920&bkba_opt=2&crop=0,0,0,0&.png",
  },
  {
    id: 2,
    name: "Porsche 911",
    description:
      "Icono del automovilismo con diseño atemporal y rendimiento excepcional.",
    price: 115000,
    elegance: 8,
    image:
      "https://imgs.search.brave.com/tzPTxbXV1a1XIkl1vcMxhw3aG75GTkfFXW0DjXJeIZY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS9CNjA5/Mzk4OTQ5MDYxQ0E1/RkU0NkFGMDJFMEM1/MkJCQkQ5QkZEMkQ3/QkEyQ0NCMTQzQzBG/MjYzMEE3NUNGREE3/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDNzBQ/UkMwMTFCMDIxMDAx/LmpwZw",
  },
  {
    id: 3,
    name: "BMW 7 Series",
    description:
      "Sedán de lujo con tecnología de vanguardia y confort supremo.",
    price: 87000,
    elegance: 7,
    image:
      "https://imgs.search.brave.com/effZ45wymI6MigE8S1HnioZyrjbjuMf-bHyXEEonYXw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4ub3RvLmNvbS9s/YXJnZS9nYWxsZXJ5/L2NvbG9yLzMvMzUv/Ym13LTctc2VyaWVz/LXNlZGFuLWNvbG9y/LTY5NTgyMi5qcGc",
  },
  {
    id: 4,
    name: "Mercedes-Benz S-Class",
    description:
      "Símbolo de lujo y sofisticación con interiores de primera clase.",
    price: 111000,
    elegance: 9,
    image:
      "https://imgs.search.brave.com/bFguPw0HwpNv3VP9klmaLiLwVBkbAKfMYT7QwvcoMUk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS8yN0Qw/Q0M2NDkzMzU3QkVF/NjI4NUU5MzhBNzcx/OENGRkU0MjYyOEU1/NzYwRkM4QUZENDA0/NEU4QjFBRTFBMzQ5/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDODBN/QkM5MTJBMDIxMDAx/LmpwZw",
  },
  {
    id: 5,
    name: "Audi A8",
    description:
      "Sedán de lujo con tecnología innovadora y un diseño elegante.",
    price: 86000,
    elegance: 7,
    image:
      "https://imgs.search.brave.com/nBx6lKv6otgw_ok-xb3hJX4p3JxrVzrKCgUur7q1cGQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubW90b3IuZXMv/Zm90b3MtamF0by9h/dWRpL2E1LzIwMjQv/aGEvYXVkaS1hNS1o/YS1hNDVfMTY4Nzk4/OTY3MTMzMy5qcGVn",
  },
  {
    id: 6,
    name: "Jaguar XJ",
    description:
      "Sedán de lujo con un diseño distintivo y un enfoque en el confort.",
    price: 75000,
    elegance: 6,
    image:
      "https://imgs.search.brave.com/m-bWn1FWHdI6CdoMoei9KkUp4gBe-3GEj5EtedEim24/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdj/ZG4ub3RvLmNvbS9s/YXJnZS9nYWxsZXJ5/L2NvbG9yLzE4LzU3/MS9qYWd1YXIteGot/Y29sb3ItNjM4NzMz/LmpwZw",
  },
  {
    id: 7,
    name: "Maserati Quattroporte",
    description:
      "Elegante sedán italiano con un enfoque en el rendimiento y la exclusividad.",
    price: 105000,
    elegance: 8,
    image:
      "https://imgs.search.brave.com/SLIbO0u7bBxyQbD88QMWZFL-gsmxYqW3rXQkQfAV678/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS81Mjk2/RUJCNEU0MUY5QUY0/NDE1MDU3QTlGRkYz/OUU4NURGMUI1RkJF/NUQwNEYyQjMzNTQ5/N0I3MTQ3N0QzQ0Y4/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDNzBN/U0MwMzFBMDIxMDAx/XzIuanBn",
  },
  {
    id: 8,
    name: "Lexus LS 500",
    description:
      "Sedán de lujo japonés con una combinación de confort y tecnología.",
    price: 80000,
    elegance: 7,
    image:
      "https://imgs.search.brave.com/9URFpbzhDvrq2VQJ6pp2vb95EjpC9BlTdwavoqAa86Y/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS80MTRE/NTU4Rjc3N0Y2NThF/NDM4N0JBQTBDQTJD/REIwODgwRjQ2NjFB/QjBGQzlBMjlDRDhE/NUQwQ0FGQTI0REFB/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9jb21tZXJj/ZS9hdXRvZGF0YS9p/bWFnZXMvVVNDODBM/RUMzNjFBMDIxMDAx/LmpwZw",
  },
  {
    id: 9,
    name: "Bentley Continental GT",
    description: "Gran turismo de lujo con una mezcla de elegancia y potencia.",
    price: 231000,
    elegance: 10,
    image:
      "https://imgs.search.brave.com/VnObWe6c0JRqtbBad2SWmPwkUdM9TMrbp2-VwdCPsGs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbGF0/Zm9ybS5jc3RhdGlj/LWltYWdlcy5jb20v/eGxhcmdlL2luL3Yy/L3N0b2NrX3Bob3Rv/cy84YmQ1MDg3YS04/YTk0LTQ1NGItYmQ2/Yi1mODA1YzI3MmI0/ZjAvOWI2NjY5OTct/ZWIxOS00OTA5LTg0/OGUtOTdiNTY1YmY3/Y2ZjLnBuZw",
  },
  {
    id: 10,
    name: "Rolls-Royce Ghost",
    description:
      "Símbolo absoluto de lujo y sofisticación con un diseño majestuoso.",
    price: 332000,
    elegance: 10,
    image:
      "https://imgs.search.brave.com/YM7MvLcALlkC2Nd2aJEq7Fd4L-GsSdvyPQImI1Bfm2c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9lZGdl/Y2FzdC1pbWcueWFo/b28ubmV0L215c3Rl/cmlvL2FwaS9CNDEw/QjU4OTMzRTRCMTlB/N0U4MUY4N0Q4MjQz/OTkzMDAwRUZEQjA5/OUVENDE0QzM0QTUz/MTZBQkVDMDBFM0Ew/L2F1dG9ibG9nL3Jl/c2l6ZWZpbGxfdzEy/MDBfaDY3NTtxdWFs/aXR5XzgwO2Zvcm1h/dF93ZWJwO2NjXzMx/NTM2MDAwOy9odHRw/czovL3MuYW9sY2Ru/LmNvbS9vcy9hYi9f/Y21zLzIwMjAvMDgv/MjgxMjAzMTcvTmV3/LUdob3N0LXdoaXRl/LWZyLTMtNC00Lmpw/Zw",
  },
];

const CarList = () => {
  const [sortOrder, setSortOrder] = useState("asc");

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
