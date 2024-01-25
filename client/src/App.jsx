import { Route, Routes } from "react-router-dom";
import axios from "axios";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import UserContextProvider from "./UserContext";

axios.defaults.baseURL = "http://localhost:4000";
axios.defaults.withCredentials = true;

export default function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/">
          <Route index element={"Index"} />
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}
