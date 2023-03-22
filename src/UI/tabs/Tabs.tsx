import styles from "./Tabs.module.scss";
interface ITab {
  tab: string;
  handler: () => void;
}

interface IProps {
  currentTab: string;
  tabs: ITab[];
}

const Tabs = (props: IProps) => {
  const { currentTab, tabs } = props;

  return (
    <div className={styles.container}>
      {tabs.map((tab) => (
        <div
          className={
            currentTab === tab.tab
              ? `${styles.tab} ${styles.activeTab}`
              : styles.tab
          }
          onClick={tab.handler}
        >
          {tab.tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
