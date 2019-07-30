import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// elemento
const elemento = <h2>Este é um elemento JSX!</h2>; // JSX
const elemento2 = React.createElement(
  "div",
  null,
  React.createElement("h2", null, "Este é um elemento!")
);

// arrow function
const Foo = props => {
  return <p>Outro desse {props.number}</p>;
};

// componente: functional component
function App(props) {
  const [i, setI] = useState(2);

  const increment = () => {
    setI(i + 2);
  };

  return (
    <div className="App">
      <h1>Hello {props.name}</h1>
      <h1>Números pares {i}</h1>
      <button onClick={increment}>Clique aqui</button>
      <Foo number={i} />
      <h2>Start editing to see some magic happen!</h2>
      {elemento}
      {elemento2}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="João" />, rootElement);
