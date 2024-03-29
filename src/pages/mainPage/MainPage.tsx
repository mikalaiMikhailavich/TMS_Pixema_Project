import { useState } from "react";
import { useGetCardsQuery } from "../../store/requests/pixemaRequests";
import FilmListView from "../../UI/filmListView/FilmListView";

const MainPage = () => {
  const [limit, setLimit] = useState(10);
  const {
    data: { docs = [] } = {},
    isLoading,
    isFetching,
    isError,
  } = useGetCardsQuery(limit);
  const increaseLimit = () => {
    setLimit((prev) => prev + 10);
  };

  return (
    <>
      <FilmListView
        type={"ordinary"}
        films={docs}
        isFetching={isFetching}
        increaseLimit={increaseLimit}
        isLoading={isLoading}
      />
      <div></div>
    </>
  );
};

export default MainPage;
