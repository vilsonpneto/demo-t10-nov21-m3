//import "./styles.css";
const ListCharacters = ({ children, url }) => {
  return (
    <li>
      {children} - 
      <a href={url}>Mais informações</a>
    </li>
  );
};

export default ListCharacters;
