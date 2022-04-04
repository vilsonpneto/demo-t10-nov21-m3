/*Importações css, bibliotecas, outros componentes */
import { useEffect, useState } from "react";
import "./App.css";
import Characters from "./components/Characters";

function App() {
  const [dataApi, setDataApi] = useState([]);

  //Exemplo Hook useEffect() fazendo requisição em API com fetch.then
  useEffect(() => {
    // fazendo uma busca no endereço da API
    fetch("https://www.swapi.tech/api/people")
      // Quando houver a resposta, converter os dados para JSON
      .then((response) => response.json())
      // Usando os dados convertidos
      //.then((data) => console.log(data));
      .then((data) => setDataApi(data));
  }, []);

  /*Exemplo Hook useEffect() fazendo requisição em API com async await, mas para fazer o map preciso 
  fazer essa atribuição const newResponseResults = newResponse.results, e para usar a URL da próxima página precisaria
  mudar a lógica do meu sistema.
  */
  /*useEffect(() => {
    async function fetchCharacters() {
      const response = await fetch("https://www.swapi.tech/api/people");

      const newResponse = await response.json();
      const newResponseResults = newResponse.results
      console.log(newResponseResults);

      const newCharacters = newResponseResults.map((character) => ({
        ...character,
      }));
      setDataApi(newCharacters);
    }
    fetchCharacters();
  }, []); */

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
