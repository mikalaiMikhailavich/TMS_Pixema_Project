import { useAppDispatch, useAppSelector } from "../../store/hooks";
import {
  addToFavorites,
  deleteFromFavorites,
} from "../../store/reducers/favorites";

const FavoritesButton = (props: any) => {
  const { id } = props;
  const favorites = useAppSelector((state) => state.favorites.favorites);
  const dispatch = useAppDispatch();
  const handler = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    if (favorites.includes(id)) {
      dispatch(deleteFromFavorites(id));
    } else {
      dispatch(addToFavorites(id));
    }
  };

  return (
    <div onClick={handler}>
      <svg
        width="40"
        height="28"
        viewBox="0 0 40 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="40" height="28" rx="6" fill="#323537" />
        <path
          d="M24.77 22.7843L20.48 19.4943C20.0722 19.1843 19.5078 19.1843 19.1 19.4943L14.77 22.7843C14.4542 23.0381 14.0238 23.0959 13.6523 22.9343C13.2808 22.7727 13.0296 22.4184 13 22.0143V7.95431C13.0388 7.12998 13.4047 6.35513 14.0166 5.80141C14.6285 5.24769 15.4359 4.96081 16.26 5.00431H23.26C24.0891 4.96643 24.8987 5.26256 25.5077 5.82643C26.1166 6.39029 26.4741 7.17479 26.5 8.00431V22.0143C26.4611 22.4038 26.2163 22.7426 25.8586 22.9017C25.501 23.0609 25.0855 23.0161 24.77 22.7843Z"
          fill="#7B61FF"
        />
      </svg>
    </div>
  );
};

export default FavoritesButton;
