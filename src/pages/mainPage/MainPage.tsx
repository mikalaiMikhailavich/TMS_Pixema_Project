import { useEffect, useState } from "react";
import { getFilmNew } from "../../helpers/getNewFilms";
import { useGetFilmsQuery } from "../../store/requests/pixemaRequests";
import Card from "../../UI/card/Card";
import SwitchButton from "../../UI/switchButton/SwitchButton";
import styles from "./MainPage.module.scss";
const MainPage = () => {
  const [limit, setLimit] = useState(10);
  const { data = {}, isLoading, isFetching } = useGetFilmsQuery(limit);
  console.log(data);

  if (isLoading) return <h1>Loading</h1>;

  return (
    <>
      <div className={styles.container}>
        {data?.docs.map((filmItem: any) => (
          <Card key={filmItem.id} filmItem={filmItem} />
        ))}
      </div>
      <SwitchButton />
      <button
        onClick={() => {
          setLimit((prev) => prev + 10);
        }}
      >
        {isFetching ? "loading" : "+10"}
      </button>
    </>
  );
};

export default MainPage;
