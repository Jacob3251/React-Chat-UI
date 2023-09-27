import ChatBar from "../ChatBar/ChatBar";
import ChatWindow from "../ChatWindow/ChatWindow";
import DrawerManager from "../contexts/drawerContext";

const HomeLayout = () => {
  return (
    <DrawerManager>
      <div className="bg-divide h-screen min-w-screen flex space-x-[2px] overflow-hidden">
        <ChatBar></ChatBar>
        <ChatWindow></ChatWindow>
      </div>
    </DrawerManager>
  );
};

export default HomeLayout;
