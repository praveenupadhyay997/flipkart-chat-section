import React, { useState } from "react";
import ChatList from "./ChatList";
import LiveChat from "./LiveChat";

const Home = () => {
  const [livechat, setLiveChat] = useState(false);
  let messageObj = {};

  const livechatlinker = (messageObject) => {
    setLiveChat(true);
    messageObj = messageObject;
  };

  return (
    <div
      className={
        "home-container grid " + (!livechat ? " grid-cols-1" : " grid-cols-2")
      }
    >
      {livechat ? (
        <>
          <ChatList chatlinker={livechatlinker} />
          <LiveChat messageObj={messageObj} />
        </>
      ) : (
        <>
          <ChatList chatlinker={livechatlinker} />
        </>
      )}
    </div>
  );
};

export default Home;
