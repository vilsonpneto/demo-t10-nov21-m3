/*Importações css, bibliotecas, outros componentes */
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import { AiOutlineBulb, AiTwotoneBulb } from "react-icons/ai";

function App() {
  const [isOn, setIsOn] = useState(true);

  const handleLight = () => {
    // if (isOn === true) {
    //   setIsOn(false);
    // } else {
    //   setIsOn(true);
    // }

    setIsOn(!isOn);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("teste submit");
  };

  return (
    <div className="App">
      <header className="App-header">
        {isOn ? (
          <AiTwotoneBulb color="#E2F005" />
        ) : (
          <AiOutlineBulb color="#000" />
        )}

        <Button
          styleButton={isOn ? "button-container-yb" : "button-container-by"}
          onClick={handleLight}
        >
          Enviar
        </Button>

        {/* <Button styleButton="button-container-by">Enviar</Button>
        <Button styleButton="button-container-yb">Enviar</Button> */}

        {/* EXEMPLO EXTRA de uso do form 
        <form onSubmit={handleSubmit}>
          <input type="text" />
          <button type="submit">Enviar</button>
        </form>*/}
      </header>
    </div>
  );
}

export default App;
