/*Importações css, bibliotecas, outros componentes */
import "./App.css";
import ButtonComponente from "./components/Button";
import {CardPessoa} from "./components/CardPessoa";

/*Todo componente é uma função JS que retorna uma estrutura "HTML com JS" JSX (JavaScript XML)
O componente Card foi criado aqui para exemplificar o uso dele dentro do componente App. O CORRETO É CRIAR O COMPONENTE DENTRO DO DIRETORIO components
*/
const Card = (props) => {
  //chamada da função e (se existir) o objeto props devem ser passadas por parametro.
  console.log(props);
  //Lógica acima do JSX
  const nameUpperCase = props.name.toUpperCase();
  //Return com a estrutura JSX
  return (
    /*JSX - Renderização do HTML e variáveis*/
    <div>
      <h1>
        Nome Card - {nameUpperCase} - Cidade: {props.cidade}
      </h1>
    </div>
  );
};

function App() {
  const pessoa1 = {
    id:2,
    name: "Matilde",
    nationality: "Argentina",
  };

  const pessoa2 = {
    id:1,
    name: "Emanuel",
    nationality: "Portugual",
  };

  const nomePessoa = ["Matilde", "Emanuel"];
  const objetoPessoas = [pessoa1, pessoa2];

  return (
    <div className="App">
      <header className="App-header">
        <div>Hello World</div>
        <Card name="Kenzie" cidade="Curitiba" />
        {/* <Card name="Amanda" />
        <Card name="Alex" />
        <Card name="Wesley" />
        <Card name="Willian" />
        <Card name="Vilson" /> */}
         <ButtonComponente>nomePessoa</ButtonComponente>
        {/* <ButtonComponente>Enviar</ButtonComponente> */}

        <CardPessoa nome="Amanda" nacionalidade="Brasil" />
        {/* exemplo de renderiação de array de strings */}
        {/* <CardPessoa nome={nomePessoa} nacionalidade="Brasil" /> */}

        <ul>
          <li>{nomePessoa[0]}</li>
          <li>{nomePessoa[1]}</li>
          {objetoPessoas.map((pessoa) => (
            <li key={pessoa.id}>{pessoa.name}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default App;
