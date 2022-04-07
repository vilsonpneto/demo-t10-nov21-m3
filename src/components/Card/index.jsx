import axios from "axios";
import { useEffect, useState } from "react";
import ButtonsPage from "../ButtonsPage";
import ListCharacters from "../ListCharacters";
import TitlePage from "../TitlePage";

const Card = () => {
  const [currentPage, setCurrentPage] = useState(
    "https://www.swapi.tech/api/people"
  );
  const [dataApi, setDataApi] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    async function fetchCharacters() {
      const response = await axios.get(currentPage).catch((err) => {
        console.log(`MSG ERRO: ${err}`);
      });

      //console.log(response.data.results);
      setDataApi(response.data.results);
      setPrevPage(response.data.previous);
      setNextPage(response.data.next);
      setLoading(false);
    }
    fetchCharacters();
  }, [currentPage]);

  return (
    <>
      <TitlePage>Personagens</TitlePage>
      <ButtonsPage
        prevPage={prevPage}
        nextPage={nextPage}
        setCurrentPage={setCurrentPage}
      />
      {loading ? (
        <h3>Carregando...</h3>
      ) : (
        <ul>
          {dataApi.map((data) => {
            return (
              <ListCharacters key={data.uid} url={data.url}>
                {data.name}
              </ListCharacters>
            );
          })}
        </ul>
      )}
    </>
  );
};

export default Card;
