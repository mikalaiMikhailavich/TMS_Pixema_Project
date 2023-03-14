import { Route, Routes } from "react-router-dom";
import "./assets/styles/main.scss";
import Layout from "./components/layout/Layout";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="film/:id" />
      </Route>
    </Routes>
  );
};

export default App;
