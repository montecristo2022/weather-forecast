import { useEffect, lazy, useState } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { Layout } from "./Layout";
import { RestrictedRoute } from "./RestrictedRoute";
import { refreshUser } from "../redux/auth/operations";
import { useAuth } from "../hooks/useAuth";

const HomePage = lazy(() => import("../pages/Home"));
const RegisterPage = lazy(() => import("../pages/Register"));

export const App = () => {
  const [renderData, setRenderData] = useState("");

  
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Loading Page...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout setRenderData={setRenderData}/>}>
          <Route index element={<HomePage renderData={renderData}  setRenderData={setRenderData}/>} />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="" component={<RegisterPage />} />
          }
        />
      </Route>
    </Routes>
  );
};
