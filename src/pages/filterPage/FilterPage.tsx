import { useState } from "react";
import { useAppSelector } from "../../store/hooks";
import { useFilterFilmsQuery } from "../../store/requests/pixemaRequests";
import FilmListView from "../../UI/filmListView/FilmListView";

const FilterPage = () => {
  const [limit, setLimit] = useState(10);
  const { sortByYears, sortByRating, sortBy } = useAppSelector(
    (state) => state.filter
  );

  const fromYearValue = sortByYears.from;
  const toYearValue = sortByYears.to;
  const fromRatingValue = sortByRating.from;
  const toRatingValue = sortByRating.to;
  const {
    data: { docs = [] } = {},
    isLoading,
    isFetching,
  } = useFilterFilmsQuery({
    fromYear: fromYearValue,
    toYear: toYearValue,
    fromRating: fromRatingValue,
    toRating: toRatingValue,
    sortBy: sortBy,
    limit: limit,
  });
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

export default FilterPage;
