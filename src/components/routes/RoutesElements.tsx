import { Route, Routes } from "react-router-dom";
import Activation from "../../pages/activation/Activation";
import Favorites from "../../pages/favorites/Favorites";
import FilterPage from "../../pages/filterPage/FilterPage";
import { LayoutMemo } from "../../pages/layout/Layout";
import MainPage from "../../pages/mainPage/MainPage";
import SelectedFilm from "../../pages/selcetedFilm/SelectedFilm";
import Settings from "../../pages/settings/Settings";
import SignIn from "../../pages/signIn/SignIn";
import SignUp from "../../pages/signUp/SignUp";

const RoutesElements = () => {
  return (
    <Routes>
      <Route path="/" element={<LayoutMemo />}>
        <Route index element={<MainPage />} />
        <Route path="film/">
          <Route path=":id" element={<SelectedFilm />} />
        </Route>
        <Route path="settings" element={<Settings />} />
        <Route path="filter" element={<FilterPage />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="activation" element={<Activation />} />
        <Route path="favorites" element={<Favorites />} />
      </Route>
    </Routes>
  );
};

export default RoutesElements;
