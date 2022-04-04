const Characters = ({ dataApi }) => {
  console.log(dataApi);
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
