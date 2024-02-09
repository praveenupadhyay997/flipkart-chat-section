import React from "react";

const ChatPill = (message) => {
  console.log(message);
  return (
    <div className="chatpill-container">
      <div className="image">
        <img alt="pic-of-chat" src={message.imageURL} />
      </div>
      <div className="chat-title">
        <h1>{message?.title}</h1>
        <h2>Order &nbsp; {message.orderId}</h2>
        <p>
          {message?.messageList.length > 0 &&
            message?.messageList.filter(
              (m) => m.timestamp === message.latestMessageTimestamp
            )}
        </p>
      </div>
    </div>
  );
};

export default ChatPill;
