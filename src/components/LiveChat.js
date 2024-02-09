import React from "react";
import LiveChatTitle from "./LiveChatTitle";

const LiveChat = ({ messageObj }) => {
  const { imageURL, title } = messageObj;
  return (
    <div className="col-auto">
      <div className="live-chat-title">
        <LiveChatTitle imag={imageURL} title={title} />
      </div>
    </div>
  );
};

export default LiveChat;
