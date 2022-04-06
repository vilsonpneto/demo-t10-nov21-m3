import axios from "axios";
import { useEffect, useState } from "react";
import ButtonComp from "../ButtonComp";

const Card = () => {
  const [nextPage, setNextPage] = useState("https://www.swapi.tech/api/people");
  const [dataApi, setDataApi] = useState([]);

  useEffect(() => {
    async function fetchCharacters() {
      const response = await axios.get(nextPage).catch((err) => {
        console.log(`MSG ERRO: ${err}`);
      });

      //console.log(response.data.results);
      setDataApi(response.data.results);
      setNextPage(response.data.next);
    }
    fetchCharacters();
  }, []);

  const handleNexPage = () => {
    async function fetchCharacters() {
      const response = await axios.get(nextPage).catch((err) => {
        console.log(`MSG ERRO: ${err}`);
      });

      //console.log(response.data.results);
      setDataApi(response.data.results);
      setNextPage(response.data.next);
    }
    fetchCharacters();
  };

  return (
    <>
      <div>Card</div>
      <ButtonComp onClick={handleNexPage}>Next Page</ButtonComp>
      {nextPage ? (
        <ul>
          {dataApi.map((data) => {
            return <li key={data.uid}>{data.name}</li>;
          })}
        </ul>
      ) : (
        <h3>vazio</h3>
      )}
    </>
  );
};

export default Card;
