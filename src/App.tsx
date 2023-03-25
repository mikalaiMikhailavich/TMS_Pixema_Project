import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import "./assets/styles/main.scss";
import MainPage from "./pages/mainPage/MainPage";
import SelectedFilm from "./pages/selcetedFilm/SelectedFilm";
import Settings from "./pages/settings/Settings";
import FilterPage from "./pages/filterPage/FilterPage";
import SignIn from "./pages/signIn/SignIn";
import SignUp from "./pages/signUp/SignUp";
import Activation from "./pages/activation/Activation";
import Favorites from "./pages/favorites/Favorites";
const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
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

export default App;
