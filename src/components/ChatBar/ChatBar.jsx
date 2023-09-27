import { useContext } from "react";
import ChatBarItems from "./ChatBarItems/ChatBarItems";
import ChatBarOption from "./ChatBarOption/ChatBarOption";
import { DrawerContext } from "../contexts/drawerContext";
import ChatDashboard from "./ChatDashboard/ChatDashboard";

const ChatBar = () => {
  const { showSettings } = useContext(DrawerContext);
  return (
    <div className="bg-divide min-w-full md:min-w-[25%] max-h-screen flex flex-col relative">
      {showSettings === false && <ChatBarOption></ChatBarOption>}
      {showSettings === false && (
        <div className="flex-1 overflow-y-auto">
          <ChatBarItems></ChatBarItems>
        </div>
      )}
      {showSettings === true && (
        <div className="bg-divide min-w-full md:min-w-[25%] max-h-screen flex flex-col relative">
          {" "}
          <ChatDashboard></ChatDashboard>
        </div>
      )}
    </div>
  );
};

export default ChatBar;
