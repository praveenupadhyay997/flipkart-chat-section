import React, { useEffect, useRef, useState } from "react";
import ChatPill from "./ChatPill";

const ChatList = ({ livechatlinker }) => {
  const [filterText, setFilterText] = useState("");
  const messageData = useRef({});
  useEffect(() => {
    async function getMessage() {
      try {
        const apiMessageData = await fetch(
          "https://my-json-server.typicode.com/codebuds-fk/chat/chats"
        );
        const jsonData = await apiMessageData.json(); // Make sure to await here

        console.log(jsonData);

        if (messageData) {
          messageData.current = jsonData;
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    getMessage();
  }, [filterText]);

  const filterTextChange = (e) => {
    setFilterText((prev) => e.target.value);
  };
  return (
    <div className="chat-list-container">
      <div className="chat-title">
        <h1 className="title-text">Filter by Title / Order Id</h1>
        <input
          type="text"
          placeholder="Start typing to search"
          onChange={(e) => {
            filterTextChange(e);
          }}
        />
      </div>
      <div className="chat--lists">
        {messageData.current.length > 0 &&
          messageData.current.map((message) => <ChatPill message={message} />)}
      </div>
    </div>
  );
};

export default ChatList;
