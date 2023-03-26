import RoutesElements from "./components/routes/RoutesElements";
import {
  useGetUserInfoMutation,
  useRefreshTokenMutation,
} from "./store/requests/auth";

const App = () => {
  const [getUserInfo, { data, error }] = useGetUserInfoMutation();
  const [refreshToken, { data: refresh }] = useRefreshTokenMutation();
  return <RoutesElements />;
};

export default App;
