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
      {tabs.map(({ tab, querySelector, handler }) => (
        <div
          key={tab}
          className={
            currentTab === querySelector
              ? `${styles.tab} ${styles.activeTab}`
              : styles.tab
          }
          onClick={handler}
        >
          {tab}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
