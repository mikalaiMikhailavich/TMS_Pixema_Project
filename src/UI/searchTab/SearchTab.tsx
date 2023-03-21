import cn from "classnames";
import { ISearchTab } from "../../services/types";
import styles from "./SearchTab.module.scss";

interface IProps {
  searchTab: ISearchTab;
  searchType: number;
  onClick: (number: number) => void;
}

const SearchTab = (props: IProps) => {
  const { searchTab, searchType, onClick } = props;
  const { value, type } = searchTab;
  return (
    <div
      className={cn(styles.container, { [styles.active]: type === searchType })}
      onClick={() => onClick(type)}
    >
      {value}
    </div>
  );
};

export default SearchTab;
