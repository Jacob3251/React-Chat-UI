import React, { useContext } from "react";
import { DrawerContext } from "../../contexts/drawerContext";

const AddAccount = () => {
  const { showSettings, handleSettingsToggler } = useContext(DrawerContext);
  return (
    <div
      onClick={showSettings == true && handleSettingsToggler}
      className="text-tColor bg-primary w-full flex justify-center items-center"
    >
      <h4 className="bg-hov px-4 py-1 font-semibold rounded-full drop-shadow-md">
        Add account route is not yet designed!!!
      </h4>
    </div>
  );
};

export default AddAccount;
