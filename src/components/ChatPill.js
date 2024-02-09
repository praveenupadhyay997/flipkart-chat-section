import React from "react";

const ChatPill = ({ message, livechatlinker }) => {
  const messageObject = message;
  const latestMessage =
    message.messageList.length > 0
      ? message?.messageList.filter(
          (m) => m.timestamp === message.latestMessageTimestamp
        )[0].message
      : "";
  return (
    <div className="chatpill-container">
      <div className="image">
        <img alt="pic-of-chat" src={message.imageURL} />
      </div>
      <div className="chat-content">
        <h1
          onClick={(e) => {
            livechatlinker.chatlinker(messageObject);
          }}
        >
          {message.title}
        </h1>
        <h2>Order &nbsp; {message.orderId}</h2>
        <p>{latestMessage}</p>
      </div>
      <div className="chat-date">{/* {message.latestMessageTimestamp.} */}</div>
    </div>
  );
};

export default ChatPill;

// convert the timestamp to 10/11/2023 format
