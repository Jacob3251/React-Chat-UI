import Scrollbars from "react-custom-scrollbars";
import MessageOperator from "../../Shared/MessageOperator/MessageOperator";
import MessageDiv from "../../Shared/MessageDiv/MessageDiv";
import MessageContainer from "../../Shared/MessageContainer/MessageContainer";

const SavedMessages = () => {
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

  return (
    <MessageContainer type="Saved Messages" data={data}></MessageContainer>
  );
};

export default SavedMessages;
