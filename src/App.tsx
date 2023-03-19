import { Route, Routes, useLocation } from "react-router-dom";
import Layout from "./pages/layout/Layout";
import "./assets/styles/main.scss";
import MainPage from "./pages/mainPage/MainPage";
import SelectedFilm from "./pages/selcetedFilm/SelectedFilm";
const App = () => {
  const location = useLocation();
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<MainPage />} />
        <Route path="film/">
          <Route path=":id" element={<SelectedFilm />} />
        </Route>
        <Route path="signin" element={""} />
      </Route>
    </Routes>
  );
};

export default App;
