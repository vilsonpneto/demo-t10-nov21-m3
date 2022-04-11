import {useHistory} from "react-router-dom"

const LandingPage = ()=>{

  const history = useHistory();
  return(<><h1>LandingPage</h1>
  <button onClick={()=> history.push("/home/Kenzie")}>acessar</button>
  
  </>
  )
}
export default LandingPage