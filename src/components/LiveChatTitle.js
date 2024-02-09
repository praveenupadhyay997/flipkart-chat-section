import React from "react";

const LiveChatTitle = ({ imag, title }) => {
  return (
    <div className="livechat-title-container p-2 w-[100%] flex gap-6">
      <div className="image overflow-hidden max-w-24 max-h-24 rounded-[50%]">
        <img alt="pic-of-chat" src={imag} />
      </div>
      <div className="title font-bold">{title}</div>
    </div>
  );
};

export default LiveChatTitle;
