import { AiOutlineUser, AiOutlineKey } from "react-icons/ai";
import { useState } from "react";
import { handleInputChange } from "../../controller/Authentication/Authentication.controller";
function Input({ data, setData, text, placeholder }) {
  const [value, setValue] = useState("");

  return (
    <>
      {text === "email" ? (
        <AiOutlineUser className="text-xl top-3 absolute left-1" />
      ) : (
        <AiOutlineKey className="text-xl  top-4 absolute left-1" />
      )}
      <input
        className="opacity w-full py-3 pl-8 outline-0 focus:outline-dark focus:border-0 focus:outline-0 "
        placeholder={placeholder}
        value={value}
        onChange={(e) => {
          handleInputChange(e, text, data, setData, setValue);
        }}
      />
    </>
  );
}

export default Input;
