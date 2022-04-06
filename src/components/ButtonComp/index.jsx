import "./styles.css";

const ButtonComp = (props) => {
  ///lógica
  return <button className="container-button" onClick={props.onClick} >{props.children}</button>;
};

export default ButtonComp;
