import { createContext, useState } from "react";

export const DrawerContext = createContext();

const DrawerManager = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const [disableChatBar, setDisableChatBar] = useState(false);
  const [sidebarContentType, setSidebarContentType] = useState("default");
  const handleSettingsToggler = () => {
    setShowSettings(!showSettings);
  };
  const drawerValues = {
    showSettings,
    setShowSettings,
    handleSettingsToggler,
    sidebarContentType,
    setSidebarContentType,
    disableChatBar,
    setDisableChatBar,
  };
  return (
    <DrawerContext.Provider value={drawerValues}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerManager;
