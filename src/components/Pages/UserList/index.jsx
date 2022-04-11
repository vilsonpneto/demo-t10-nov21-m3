import MenuBar from "../../MenuBar"
import {useHistory} from "react-router-dom"

const UserList = ()=>{

  const history = useHistory();
  return(
    <>
    <MenuBar/>
    <h1>UserList</h1>
    <button onClick={()=> history.push("/")}>Sair</button>
    </>)
}
export default UserList