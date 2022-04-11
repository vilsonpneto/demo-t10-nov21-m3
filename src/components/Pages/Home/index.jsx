import MenuBar from "../../MenuBar";
import {useHistory, useParams} from "react-router-dom"


const Home = ()=>{

  const history = useHistory();
  const param = useParams()
  console.log(param)
  return(
  <>
  <MenuBar/>
  
  <p>{param.nome ? `Ola ${param.nome} bem-vindo`: `Home`}</p>
  <button onClick={()=> history.push("/")}>Sair</button>
  </>);
}
export default Home