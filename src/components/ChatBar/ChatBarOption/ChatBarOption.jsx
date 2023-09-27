import { useContext } from "react";
import { DrawerContext } from "../../contexts/drawerContext";

const ChatBarOption = () => {
  const { handleSettingsToggler } = useContext(DrawerContext);

  return (
    <div className="text-tColor bg-secondary flex px-5 justify-between items-center py-3">
      {/* Menu Icon Div */}
      <div
        className="rounded-full p-[6px] hover:bg-hov cursor-pointer duration-300"
        onClick={handleSettingsToggler}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
      {/* Search Bar Component */}
      <div className=" min-w-[90%] py-1  overflow-hidden">
        <input
          type="text"
          name="searchPerson"
          id="searchPerson"
          placeholder="Search"
          className="w-full bg-hov outline-none  h-[35px] pl-3 rounded-full"
        />
      </div>
    </div>
  );
};

export default ChatBarOption;
