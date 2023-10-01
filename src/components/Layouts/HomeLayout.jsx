import DrawerContents from "../DrawerContents/DrawerContents";
import DrawerManager from "../contexts/drawerContext";
import ChatManager from "../contexts/chatContext";

const HomeLayout = () => {
  return (
    <ChatManager>
      <DrawerManager>
        <DrawerContents></DrawerContents>
      </DrawerManager>
    </ChatManager>
  );
};

export default HomeLayout;
