import React, { useEffect, useState } from "react";
import ChatPill from "./ChatPill";

const ChatList = ({ chatlinker }) => {
  const [filterText, setFilterText] = useState("");
  const [messageData, setMessageData] = useState([]);
  useEffect(() => {
    async function getMessage() {
      try {
        const apiMessageData = await fetch(
          "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
        );
        const jsonData = await apiMessageData.json();
        if (jsonData) {
          setMessageData(jsonData);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getMessage();
  }, [filterText]);

  const filterTextChange = (e) => {
    setFilterText(e.target.value);
  };

  return (
    <div className="chat-list-container bg-gray-100">
      <div className="chat-title p-2 w-[100%] bg-slate-400">
        <h1 className="title-text text-xl font-bold">
          Filter by Title / Order Id
        </h1>
        <input
          className="w-[100%]"
          type="text"
          placeholder="Start typing to search"
          onChange={(e) => {
            filterTextChange(e);
          }}
        />
      </div>
      <div className="chat--lists">
        {messageData.length > 0 &&
          messageData.map((message) => (
            <ChatPill
              key={"message" + message.id}
              message={message}
              livechatlinker={{ chatlinker }}
            />
          ))}
      </div>
    </div>
  );
};

export default ChatList;
