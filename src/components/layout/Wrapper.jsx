import { AiOutlineWechat, AiOutlineUser } from "react-icons/ai";
import { BsBookmarks } from "react-icons/bs";

function Wrapper({ children }) {
  return (
    <main className="w-full h-screen sm:flex bg-subDark">
        <div className="bg-dark h-screen w-[70px] hidden sm:block flex flex-col items-center">
        <p className="text-gray-400 text-2xl font-bold py-3">
            CH
        </p>
        </div>
      <div className="w-full sm:w-[calc(100%-70px)] h-[90vh] sm:h-screen">{children}</div>
      <div className="w-full sm:hidden text-3xl px-4 flex items-center text-gray-400 justify-between bg-dark h-[10vh]">
        <div>
          <AiOutlineWechat />
        </div>
        <div>
          <BsBookmarks />
        </div>
        <div>
          <AiOutlineUser />
        </div>
      </div>
    </main>
  );
}

export default Wrapper;
