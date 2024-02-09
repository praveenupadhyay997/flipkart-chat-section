import React from "react";

const ChatPill = ({ message, livechatlinker }) => {
  const messageObject = message;
  const latestMessage =
    message.messageList.length > 0
      ? message?.messageList.filter(
          (m) => m.timestamp === message.latestMessageTimestamp
        )[0].message
      : "";
      const formattedDate = (timestamp) => {
        const date = new Date(timestamp);
        return [date.getDate(), date.getMonth(), date.getFullYear()].join("/");
      };
      return (
        <div className="w-[100%] p-4 chatpill-container flex justify-between items-center border-gray-600 border-t-2 border-b-2">
          <div className="image overflow-hidden max-w-24 max-h-24 rounded-[50%]">
            <img alt="pic-of-chat" src={message.imageURL} />
          </div>
          <div className="chat-content self-start flex flex-col justify-start">
            <h1
              className="text-black font-semibold"
              onClick={(e) => {
                livechatlinker.chatlinker(messageObject);
              }}
            >
              {message.title}
            </h1>
            <h2 className="text-black font-semibold">
              Order &nbsp; {message.orderId}
            </h2>
            <p className="text-gray-500">{latestMessage}</p>
          </div>
          <div className="chat-date self-start">
            {formattedDate(message.latestMessageTimestamp)}
          </div>
        </div>
      );
};

export default ChatPill;

// convert the timestamp to 10/11/2023 format
