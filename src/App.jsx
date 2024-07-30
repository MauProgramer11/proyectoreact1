import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CarList from "./components/CarList";
import "./App.css";

const App = () => (
  <div className="App">
    <Header />
    <main>
      <CarList />
    </main>
    <Footer />
  </div>
);

export default App;
