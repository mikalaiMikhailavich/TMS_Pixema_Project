import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import {
  useGetCardsQuery,
  useGetFavoriteCardsQuery,
} from "../../store/requests/pixemaRequests";
import FilmListView from "../../UI/filmListView/FilmListView";
import NoFavoritePosts from "../../UI/noFavoritePosts/NoFavoritePosts";

const Favorites = () => {
  const [limit, setLimit] = useState(10);
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const query = favorites.map((item) => `search=${item}&field=id`).join("&");
  const countFavorites = Number(favorites.length);
  const {
    data: { docs = [] } = {},
    isFetching,
    isLoading,
  } = useGetFavoriteCardsQuery({
    query,
    limit: countFavorites,
  });

  if (!favorites.length) return <NoFavoritePosts />;

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
        type={"favorite"}
      />
    </>
  );
};

export default Favorites;
