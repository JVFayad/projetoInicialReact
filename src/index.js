import React, { useState } from "react";
import ReactDOM from "react-dom";

import "./styles.css";

// Jogo de adivinhação de números
// 0 <> 300
// Estados: Entrada, Rodando, Fim

function App() {
  const [estado, setEstado] = useState("ENTRADA");
  const [palpite, setPalpite] = useState(150);
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(300);
  const [numP, setNump] = useState(1);

  const iniciarJogo = () => {
    setEstado("RODANDO");
    setPalpite(150);
    setMin(0);
    setMax(300);
    setNump(1);
  };

  const menor = () => {
    setMax(palpite);
    setNump(numP + 1);
    const novoPalpite = parseInt((palpite - min) / 2) + min;
    setPalpite(novoPalpite);
  };

  const maior = () => {
    setMin(palpite);
    setNump(numP + 1);
    const novoPalpite = parseInt((max - palpite) / 2) + palpite;
    setPalpite(novoPalpite);
  };

  const FinalizarJogo = () => {
    setEstado("FIM");
  };

  if (estado === "ENTRADA") {
    return <button onClick={iniciarJogo}>Jogar!</button>;
  } else {
    if (estado === "FIM") {
      return (
        <div>
          <h2>
            Acertei o número {palpite} com {numP} palpites!
          </h2>
          <button onClick={iniciarJogo}>Recomeçar!</button>
        </div>
      );
    } else {
      return (
        <div className="App">
          <h2>O Número é {palpite}?</h2>
          <button onClick={menor}>Menor!</button>
          <button onClick={FinalizarJogo}>Acertou</button>
          <button onClick={maior}>Maior!</button>
        </div>
      );
    }
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App name="João" />, rootElement);
