import { useState } from "react";
import { useGetCardsQuery } from "../../store/requests/pixemaRequests";
import { Button } from "../../UI/button/Button";
import Card from "../../UI/card/Card";
import SwitchButton from "../../UI/switchButton/SwitchButton";
import styles from "./MainPage.module.scss";
const MainPage = () => {
  const [limit, setLimit] = useState(10);
  // const { data, isLoading, isFetching } = useGetFilmsQuery(limit);
  const {
    data: { docs = [] } = {},
    isLoading,
    isFetching,
  } = useGetCardsQuery(limit);
  console.log(docs);

  if (isLoading) return <h1>Loading</h1>;
  const increaseLimit = () => {
    setLimit((prev) => prev + 10);
  };
  return (
    <>
      <div className={styles.container}>
        {docs.map((filmItem: any) => (
          <Card key={filmItem.id} filmItem={filmItem} />
        ))}
      </div>
      <SwitchButton />
      <Button
        value={"Show more"}
        type={"secondary"}
        handler={increaseLimit}
        isFetching={isFetching}
      />
    </>
  );
};

export default MainPage;
