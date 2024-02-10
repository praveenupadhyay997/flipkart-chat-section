import React from "react";
import OptionedLiveChatPill from "./OptionedLiveChatPill";
import UserChatPill from "./UserChatPill";
import { getTimeFomatted } from "../utilities/getTimeFormat";
const LiveChatPill = ({ message }) => {
  console.log(message);
  return (
    <div className="livechatpill-container">
      {message.sender === "BOT" ? (
        <div className="bot-reply">
          {message.messageType === "optionedMessage" ? (
            <OptionedLiveChatPill optionedMessage={message} />
          ) : (
            <div className="chat-box grid grid-row-2 items-center">
              <h1 className="grid-rows-1">{message.message}</h1>
              <h1 className="grid-rows-1">
                {getTimeFomatted(message.timestamp)}
              </h1>
            </div>
          )}
        </div>
      ) : (
        <div className="user-reply">
          <UserChatPill message={message} />
        </div>
      )}
    </div>
  );
};

export default LiveChatPill;
