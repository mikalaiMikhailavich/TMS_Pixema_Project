import { useState } from "react";
import { searchTabs } from "../../services/constants";
import { IMovie } from "../../services/types";
import { useSearchFilmsQuery } from "../../store/requests/pixemaRequests";
import Card from "../card/Card";
import SearchTab from "../searchTab/SearchTab";
import styles from "./SearchList.module.scss";

interface IProps {
  searchValue: string;
  opened?: boolean;
  onClose: () => void;
}

const SearchList = (props: IProps) => {
  const [searchType, setSearchType] = useState<number>(1);
  const { searchValue, onClose } = props;
  const { data, isFetching, isLoading, isError } = useSearchFilmsQuery({
    searchText: searchValue,
    typeNumber: searchType,
  });
  console.log(searchType);

  const setActiveSearchType = (number: number) => {
    setSearchType(number);
  };

  if (data?.docs.length === 0) {
    return (
      <div className={styles.container}>
        <h1>Резултатов не найдено</h1>
      </div>
    );
  }
  console.log(data?.docs);

  return (
    <>
      <div className={styles.container}>
        <div className={styles.tabsContainer}>
          {searchTabs.map((searchTab) => (
            <SearchTab
              key={searchTab.type}
              searchTab={searchTab}
              onClick={setActiveSearchType}
              searchType={searchType}
            />
          ))}
        </div>
        {isFetching ? (
          <div className={styles.loading}>Загрузка</div>
        ) : (
          <div className={styles.searchItems} onClick={onClose}>
            {data?.docs.map((searchCard: IMovie) => (
              <Card key={searchCard.id} type={"search"} filmItem={searchCard} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default SearchList;
