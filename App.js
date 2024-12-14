import React from "react";
import "./App.css";

const dramas = [
  {
    title: "Gaint-Panda",
    image: "/spec/panda.jpg",
    url: 'https://en.wikipedia.org/wiki/Giant_panda',
  },
  {
    title: "Snow-Leopard",
    image: "/spec/snow.jpg",
    url: 'https://en.wikipedia.org/wiki/Snow_leopard',
  },
  {
    title: "Blue-Whale",
    image: "/spec/blue.jpg",
    url: 'https://en.wikipedia.org/wiki/Blue_whale',
  },
];

function App() {
  return (
    <div className="app">
      <header className="header">
        <h1>Endangered-species</h1>
      </header>
      <main className="main">
        {dramas.map((drama, index) => (
          <div className="drama-card" key={index}>
            <img src={drama.image} alt={drama.title} className="drama-image" />
            <a href={drama.url} target="_blank" rel="noopener noreferrer">
            <h2>{drama.title}</h2>
            </a>
            <p>{drama.description}</p>
          </div>
        ))}
      </main>
      <h2>About</h2>
      <p>We all have a responsibility to protect endangered species, both for their sake and for the sake of our own future generations.
         The Endangered Species Act (ESA) is a law that provides a framework for protecting and recovering species that are at risk of extinction. The ESA was enacted in 1973 and is considered to be the world's strongest conservation law.      
      </p>
      
    </div>
  );
}

export default App;
