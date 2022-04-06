/*Importações css, bibliotecas, outros componentes */
import { useState } from "react";
import "./App.css";
import ButtonComp from "./components/ButtonComp";
import Card from "./components/Card";
import CardPeople from "./components/CardPeople";

function App() {
  const [statusShowMsg, setStatusShowMsg] = useState(false);

  const handleClickStatus = () => {
    setStatusShowMsg(true);
    console.log(statusShowMsg);
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>Hello World</div>
        {/* {statusShowMsg ? "ATIVO" : "inativo"}
        <ButtonComp onClick={handleClickStatus} />
        <CardPeople /> */}

        <Card />
      </header>
    </div>
  );
}

export default App;
