import { useState } from "react";
import { handleSignIn } from "../../controller/Authentication/Authentication.controller";
import Input from "./Input";

import { Link, useNavigate } from "react-router-dom";
function SignIn() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    emailError: "",
    passError: "",
    showFirebaseError: false,
    firebaseError: "Some error",
  });

  return (
    <div className="max-w-[400px] w-[90%] py-4 px-2 text-gray-400   ">
      <h2 className="text-2xl mb-5 text-center ">LOGIN</h2>
      {data.showFirebaseError && (
        <p className="w-full text-center py-2 bg-red-400 rounded-md mb-3 text-white ">
          {data.firebaseError}
        </p>
      )}
      <form
        onSubmit={(e) => {
          handleSignIn(e, data, setData, navigate);
        }}
      >
        <div className="relative">
          <Input
            data={data}
            setData={setData}
            text={"email"}
            placeholder={"enter your email"}
          />
          <small className="text-red-500">{data.emailError}</small>
        </div>
        <div className="relative mt-3 mb-3">
          <Input
            data={data}
            setData={setData}
            text={"password"}
            placeholder={"enter your password"}
          />
          <small className="text-red-500">{data.passError}</small>
        </div>
        <small>
          Dont have an account?
          <span className="text-red-500">
            <Link to="/signup"> Sign up</Link>
          </span>{" "}
        </small>
        <button className="w-full py-3 mt-3 bg-customBlue text-white font-bold">
          LOGIN
        </button>
      </form>
    </div>
  );
}

export default SignIn;
