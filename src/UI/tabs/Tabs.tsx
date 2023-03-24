import styles from "./Tabs.module.scss";
interface ITab {
  tab: string;
  querySelector: string;
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
          key={tab.tab}
          className={
            currentTab === tab.querySelector
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
