import { useContext } from "react";
import { DrawerContext } from "../../contexts/drawerContext";
import ChatBarItem from "./ChatBarItem";
import { Scrollbars } from "react-custom-scrollbars";

const ChatBarItems = () => {
  const { setSidebarContentType, setDisableChatBar, disableChatBar } =
    useContext(DrawerContext);
  return (
    <Scrollbars
      autoHideTimeout={1000}
      autoHideDuration={200}
      style={{ width: "100%", height: "100%" }}
    >
      <div className={disableChatBar && "hidden md:block"}>
        <ChatBarItem
          name="Mr. Perfact"
          img="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
        ></ChatBarItem>
        <ChatBarItem
          name="Mr. Perfact 2"
          img="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
        ></ChatBarItem>
        <ChatBarItem
          name="Mr. Perfact 3"
          img="https://media.istockphoto.com/id/906808234/photo/handsome-man.jpg?s=612x612&w=0&k=20&c=Ec8IY-ETslaS56vmO77BJyEOpPM1hzJlLbs6xeKRoAc="
        ></ChatBarItem>
      </div>
    </Scrollbars>
  );
};

export default ChatBarItems;
