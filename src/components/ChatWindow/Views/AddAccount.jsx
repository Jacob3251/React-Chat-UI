import React, { useContext } from "react";
import { DrawerContext } from "../../contexts/drawerContext";

const AddAccount = () => {
  const { showSettings, handleSettingsToggler, setDisableChatBar } =
    useContext(DrawerContext);
  return (
    <div
      onClick={showSettings == true && handleSettingsToggler}
      className="text-tColor bg-primary w-full flex flex-col justify-center items-center"
    >
      <h4 className="bg-hov px-4 py-1 font-semibold rounded-full drop-shadow-md">
        Add account route is not yet designed!!!
      </h4>
      <div className="my-5 bg-hov px-3 py-2 rounded-lg cursor-pointer md:hidden">
        <button
          onClick={() => setDisableChatBar(false)}
          className="uppercase font-bold"
        >
          back
        </button>
      </div>
    </div>
  );
};

export default AddAccount;
