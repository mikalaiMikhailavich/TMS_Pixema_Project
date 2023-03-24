import { useState } from "react";
import { useGetCardsQuery } from "../../store/requests/pixemaRequests";
import FilmListView from "../../UI/filmListView/FilmListView";

const MainPage = () => {
  const [limit, setLimit] = useState(10);

  const {
    data: { docs = [] } = {},
    isLoading,
    isFetching,
  } = useGetCardsQuery(limit);

  if (isLoading) return <h1>Loading</h1>;
  const increaseLimit = () => {
    setLimit((prev) => prev + 10);
  };
  return (
    <>
      <FilmListView
        films={docs}
        isFetching={isFetching}
        increaseLimit={increaseLimit}
      />
    </>
  );
};

export default MainPage;

// <div className={styles.container}>
//   {docs.map((filmItem: any) => (
//     <Card key={filmItem.id} filmItem={filmItem} />
//   ))}
// </div>
// <Button
//   value={"Show more"}
//   type={"secondary"}
//   handler={increaseLimit}
//   isFetching={isFetching}
// />
