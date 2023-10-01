import React, { useContext } from "react";
import MessageContainer from "../../Shared/MessageContainer/MessageContainer";
import { ChatContext } from "../../contexts/chatContext";

const UserChat = () => {
  const data = [
    {
      id: 1,
      name: "Dr. Right",
      pos: "right",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque unde esse quis mollitia modi fuga fugiat nisi praesentium voluptas? Doloribus natus autem nemo debitis eaque?",
      timeStamp: "2nd Oct, 2023",
    },
    {
      id: 2,
      name: "Dr. Left",
      pos: "left",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque unde esse quis mollitia modi fuga fugiat nisi praesentium voluptas? Doloribus natus autem nemo debitis eaque?",
      timeStamp: "3rd Oct, 2023",
    },
  ];
  return <MessageContainer type="UserChat" data={data}></MessageContainer>;
};

export default UserChat;
