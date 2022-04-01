// import "./styles.css";
/*
 * Quando não temos lógica no nosso componente e precisamos reotrnar só o JSX, podemos usar a Arrow Function com retorno implícito ()=>() (como estamos usando no componente atual). */
/*const Button = ({ onClick, styleButton, children }) => (
  <button onClick={onClick} className={styleButton}>
    {children}
  </button>
);*/

/*
 * Quando precisamos aplicar alguma lógica no componente precisamos usar chaves no escopo da Arrow Function com c ()=>{Return()})
 */

const Button = ({ onClick, styleButton, children }) => {
  // Com o return explícito aqui vai a lógica :)
  return (
    <button onClick={onClick} className={styleButton}>
      {" "}
      {children}{" "}
    </button>
  );
};

export default Button;
