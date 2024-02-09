import React, { useRef, useState } from "react";
import ChatList from "./ChatList";
import LiveChat from "./LiveChat";

const Home = () => {
  const [livechat, setLiveChat] = useState(false);
  let messageObj = useRef({});

  const livechatlinker = (messageObject) => {
    setLiveChat(true);
    messageObj.current = messageObject;
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
          <LiveChat messageObj={messageObj.current} />
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
