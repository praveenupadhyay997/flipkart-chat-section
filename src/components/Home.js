import React, { useState } from "react";
import ChatList from "./ChatList";
import LiveChat from "./LiveChat";

const Home = () => {
  const [livechat, setLiveChat] = useState(false);

  const livechatlinker = () => {
    setLiveChat(true);
  };

  return (
    <div className="home-container">
      {livechat ? (
        <>
          <ChatList chatlinker={livechatlinker} />
          <LiveChat />
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
