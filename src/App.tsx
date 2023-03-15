import { Route, Routes } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import "./assets/styles/main.scss";
import MainPage from "./pages/mainPage/MainPage";
import SelectedFilm from "./pages/selcetedFilm/SelectedFilm";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="film/">
          <Route path=":id" element={<SelectedFilm />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
