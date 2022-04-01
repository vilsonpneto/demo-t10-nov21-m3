// import "./styles.css";
const Button = ({ onClick, styleButton, children }) => {
  return (
    <button onClick={onClick} className={styleButton}>
      {children}
    </button>
  );
};

export default Button;
