/*Importações css, bibliotecas, outros componentes */
import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    fetch("https://www.swapi.tech/api/people")
      .then((response) => response.json())
      //.then((data) => console.log(data));
      .then((data) => setDataApi(data));
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>Star Wars Characters</div>
        <Characters dataApi={dataApi.results} />
      </header>
    </div>
  );
}

export default App;
