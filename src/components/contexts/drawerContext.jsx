import { createContext, useState } from "react";

export const DrawerContext = createContext();

const DrawerManager = ({ children }) => {
  const [showSettings, setShowSettings] = useState(false);
  const handleSettingsToggler = () => {
    setShowSettings(!showSettings);
  };
  const drawerValues = {
    showSettings,
    setShowSettings,
    handleSettingsToggler,
  };
  return (
    <DrawerContext.Provider value={drawerValues}>
      {children}
    </DrawerContext.Provider>
  );
};

export default DrawerManager;
