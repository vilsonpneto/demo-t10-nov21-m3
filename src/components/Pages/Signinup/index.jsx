import MenuBar from "../../MenuBar"
import {useHistory} from "react-router-dom"


const Siginup = ()=>{
const history = useHistory();
  return(
    <>
    <MenuBar/>
  <h1>Siginup</h1>
  <button onClick={()=> history.push("/")}>Sair</button>
  </>)
}
export default Siginup