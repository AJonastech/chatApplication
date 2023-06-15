import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import {
  handleSubmit,
} from "../../controller/Authentication/Authentication.controller";
import Input from "./Input";
function SignUp() {
  const navigate = useNavigate();
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    passError: "",
    emailError: "",
    showFirebaseError: false,
    firebaseError: "Some error",
  });

  return (
    <div className="max-w-[400px] w-[90%] py-4 px-2 text-gray-400   ">
      <h2 className="text-2xl mb-5 text-center ">Create an account</h2>
      {data.showFirebaseError && (
        <p className="w-full text-center py-2 bg-red-400 rounded-md mb-3 text-white ">
          {data.firebaseError}
        </p>
      )}
      <form
        onSubmit={(e) => {
          handleSubmit(
            e,
            createUserWithEmailAndPassword,
            navigate,
            data,
            setData
          );
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
        <div className="relative mt-3">
          <Input
            data={data}
            setData={setData}
            text={"password"}
            placeholder={"enter your password"}
          />
          <small className="text-red-500">{data.passError}</small>
        </div>
        <div className="relative mt-3 mb-3">
        <Input
            data={data}
            setData={setData}
            text={"confirmPassword"}
            placeholder={"confirm your password"}
          />
        </div>
        <small>
          Already have an account?{" "}
          <span className="text-red-500">
            <Link to="/signin">Login</Link>
          </span>{" "}
        </small>
        <button className="w-full py-3 mt-3 bg-customBlue  text-white font-bold">
          Create an account
        </button>
      </form>
    </div>
  );
}

export default SignUp;
