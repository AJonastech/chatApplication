import React from 'react'

function Chat({sender, imageUrl, message}) {
    function truncateString(inputString) {
        let truncated = inputString ? inputString.slice(0, 25) : "";
        if (inputString && inputString.length > 25) {
          truncated += "...";
        }
        return truncated;
      }  
    return (
        <div className='w-full text-gray-400 flex items-center p-2 rounded-xl  gap-2'>
            <img
            src={imageUrl}
            alt="user profile"
            className='w-[60px] rounded-xl h-[60px] object-cover'
            />
            <div>
                <p>
                    {sender}
                </p>
                <small>{truncateString(message)}</small>
            </div>
        </div>
    )
}

export default Chat
