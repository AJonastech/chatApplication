import React from "react";
import Chat from "../../components/user/Chat";
import { messages } from "../../utils/MsgData";

function UserDashBoardView() {
  return (
    <div className=" w-full flex h-full">
      <div className="w-1/4 h-full flex gap-5 flex-col items-center px-7 py-6">
        <div className="w-full">
          <input
            placeholder="Search"
            className="transUser w-full px-3 py-3 rounded-xl text-gray-400"
          />
        </div>
        <div className="flex flex-col gap-1 w-full">
        <div className='transUser w-full text-gray-400 flex items-center p-2 rounded-xl  gap-2'>
            <img
            src={messages[2].imageUrl}
            alt="user profile"
            className='w-[60px] rounded-xl h-[60px] object-cover'
            />
            <div>
                <p>
                    {messages[2].sender}
                </p>
                <small>{messages[2].message}</small>
            </div>
        </div>
          {messages.map((message, id) => (
            <Chat
              sender={message.sender}
              imageUrl={message.imageUrl}
              message={message.message}
            />
          ))}
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default UserDashBoardView;
