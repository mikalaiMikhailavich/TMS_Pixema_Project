import { useState } from "react";
import { searchTabs } from "../../helpers/constants";
import { IMovie } from "../../helpers/types";
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
  const { data, isFetching, isLoading } = useSearchFilmsQuery({
    searchText: searchValue,
    typeNumber: searchType,
  });

  const setActiveSearchType = (number: number) => {
    setSearchType(number);
  };

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
          <h2 className={styles.loading}>Загрузка</h2>
        ) : data?.docs.length === 0 ? (
          <div className={styles.loading}>
            <h1 className={styles.error}>Результатов не найдено</h1>
          </div>
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
