/*Importações css, bibliotecas, outros componentes */
import "./App.css";
import ButtonComp from "./components/Button";

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
        <ButtonComp>NOME COMP APP</ButtonComp>
        <ButtonComp>Enviar</ButtonComp>
      </header>
    </div>
  );
}

export default App;
