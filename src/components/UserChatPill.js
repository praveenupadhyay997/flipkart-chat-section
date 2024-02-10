import React from "react";
import { getTimeFomatted } from "../utilities/getTimeFormat";

const UserChatPill = ({ message }) => {
  return (
    <div className="chat-box grid grid-row-2 items-center">
      <h1 className="grid-rows-1">{message.message}</h1>
      <h1 className="grid-rows-1">{getTimeFomatted(message.timestamp)}</h1>
    </div>
  );
};

export default UserChatPill;
