//import "./styles.css";
import { StyleButton } from "./style";

const ButtonComp = (props) => {
  ///lógica
  return <StyleButton onClick={props.onClick}>{props.children}</StyleButton>;
};

export default ButtonComp;
