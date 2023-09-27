import { useContext } from "react";
import { DrawerContext } from "../contexts/drawerContext";

const ChatWindow = () => {
  const { showSettings, handleSettingsToggler } = useContext(DrawerContext);
  return (
    <div
      onClick={showSettings == true && handleSettingsToggler}
      className="text-tColor bg-primary md:min-w-[75%] flex justify-center items-center"
    >
      <h4 className="bg-hov px-4 py-1 font-semibold rounded-full drop-shadow-md">
        Select a chat to start messaging
      </h4>
    </div>
  );
};

export default ChatWindow;
