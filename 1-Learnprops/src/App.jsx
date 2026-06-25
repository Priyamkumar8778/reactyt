import React from "react";
import Card from "./components/card.jsx";
const App = () => {
  return (
    <div className="parent">
      <Card user="prym" />
      <Card user="john" />
      <Card user="jane" />
      <Card user="bob" />
    </div>
  );
};

export default App;
