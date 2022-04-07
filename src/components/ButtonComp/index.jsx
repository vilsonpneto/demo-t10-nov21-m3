import "./styles.css";

const ButtonComp = (props) => {
  ///lógica
  return <button className="button-33" onClick={props.onClick} >{props.children}</button>;
};

export default ButtonComp;
