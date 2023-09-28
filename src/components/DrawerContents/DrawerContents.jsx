import ChatBar from "../ChatBar/ChatBar";
import ChatWindow from "../ChatWindow/ChatWindow";

const DrawerContents = () => {
  return (
    <div className="bg-divide h-screen min-w-screen flex space-x-[2px] overflow-hidden">
      <ChatBar></ChatBar>
      <ChatWindow></ChatWindow>
    </div>
  );
};

export default DrawerContents;
