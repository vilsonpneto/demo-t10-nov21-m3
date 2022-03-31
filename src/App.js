/*Importações css, bibliotecas, outros componentes */
import { useState } from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const [count, setCount] = useState(0);

  const [name, setName] = useState("");
  const [nameList, setNameList] = useState([]);

  const add = () => {
    setCount(count + 1);
  };
  const sub = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const addName = () => {
    //Por conta da imutabilidade não posso acessar direto o array e fazer a alteração com o push
    // setNameList(nameList.push(name));
    setNameList([...nameList, name]);
    setName("");
  };

  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* <button onClick={add}>Adiciona 1</button> */}
          <Button onClick={add}>+1</Button>

          <div>{count}</div>

          {/* Exemplo de uso da função setCount dentro do onClick */}
          {/* <button onClick={() => setCount(count - 1)}>Subtrair 1</button> */}
          {/* <button onClick={sub}>Subtrair 1</button> */}
          <Button onClick={sub}>-1</Button>
        </div>

        {/* *******************SEGUNDO EXEMPLO********************* */}

        {/* Exemplo de console no onChange do input */}
        {/* <input value={name} placeholder="Digite um nome" onChange={(event)=>console.log(event.target.value)} /> */}
        <input
          value={name}
          placeholder="Digite um nome"
          onChange={(event) => setName(event.target.value)}
        />
        <div>{name}</div>
        <button onClick={addName}>Addicionar Nome</button>

        <ul>
          {nameList.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
