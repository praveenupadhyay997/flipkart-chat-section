import React from "react";
import LiveChatTitle from "./LiveChatTitle";
import LiveChatPill from "./LiveChatPill";
import { useId } from "react";

const LiveChat = ({ messageObj }) => {
  const id = useId();
  const { imageURL, title } = messageObj;
  return (
    <div className="col-auto">
      <div className="live-chat-title">
        <LiveChatTitle imag={imageURL} title={title} />
      </div>
      <div className="livechat-wrapper">
        {messageObj.messageList.length > 0 ? (
          messageObj.messageList.map((message) => {
            return (
              <LiveChatPill
                key={message.latestMessageTimestamp + id}
                message={message}
              />
            );
          })
        ) : (
          <div className="intitial-chat">Send a message to start chatting</div>
        )}
      </div>
      <div className="livechat-input w-[100%] flex">
        <input
          className="w-[90%]  p-4"
          type="text"
          placeholder="Type a Message...."
        />
        <div className="forward-icon w-[10%] text-3xl p-2">
          <i className="ri-arrow-right-circle-fill"></i>
        </div>
      </div>
    </div>
  );
};

export default LiveChat;
