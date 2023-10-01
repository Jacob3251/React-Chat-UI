import { useState } from "react";
import { createContext } from "react";

export const ChatContext = createContext();

const ChatManager = ({ children }) => {
  const [currentChat, setCurrentChat] = useState({
    receiver: "",
    messages: [],
    authenticated: false,
  });
  const chatValues = { currentChat, setCurrentChat };
  return (
    <ChatContext.Provider value={chatValues}>{children}</ChatContext.Provider>
  );
};

export default ChatManager;
