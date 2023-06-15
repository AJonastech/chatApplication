import { Routes, Route } from "react-router-dom";
import { signUp, signIn, index } from "./routepaths";
import { Login, Register, UserDashboard } from "../pages";

function RouteConfig() {
  return (
    <div className="font-archivo">
      <Routes>
        <Route path={signIn} element={<Login />}></Route>
        <Route path={signUp} element={<Register />}></Route>
        <Route path={index} element={<UserDashboard />}></Route>
      </Routes>
    </div>
  );
}

export default RouteConfig;
