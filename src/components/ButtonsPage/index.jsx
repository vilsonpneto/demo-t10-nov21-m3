import ButtonComp from "../ButtonComp";

const ButtonsPage = ({ prevPage, nextPage, setCurrentPage }) => {
  return (
    <>
      {prevPage && (
        <ButtonComp onClick={() => setCurrentPage(prevPage)}>
          prev Page
        </ButtonComp>
      )}
      {nextPage && (
        <ButtonComp onClick={() => setCurrentPage(nextPage)}>
          Next Page
        </ButtonComp>
      )}
    </>
  );
};

export default ButtonsPage;
