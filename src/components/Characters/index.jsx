import { useEffect } from "react";

const Characters = ({ dataApi }) => {
  //console.log(dataApi);

  useEffect(() => {
    dataApi === undefined
      ? console.log("Montagem")
      : console.log("Autalização");

    return () => {
      console.log("Desmontagem");
    };
  }, [dataApi]);

  return (
    <ul>
      {dataApi &&
        dataApi.map((character) => {
          return (
            <li key={character.uid}>
              <p>
                <strong>{character.name}</strong>
              </p>
              <a href={character.url}>Mais informações</a>
            </li>
          );
        })}
    </ul>
  );
};

export default Characters;
