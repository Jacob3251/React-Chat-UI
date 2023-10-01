import { useContext } from "react";
import { DrawerContext } from "../../contexts/drawerContext";
import { ChatContext } from "../../contexts/chatContext";

const ChatBarItem = ({ img, name, lastMsg, timestamp }) => {
  const {
    sidebarContentType,
    setSidebarContentType,
    setDisableChatBar,
    disableChatBar,
  } = useContext(DrawerContext);
  const { currentChat, setCurrentChat } = useContext(ChatContext);
  const handleUserChatNav = () => {
    setSidebarContentType("user_chat");
    setDisableChatBar(!disableChatBar);
    setCurrentChat((prevChat) => ({
      ...prevChat,
      receiver: name,
    }));
  };

  return (
    <div
      onClick={handleUserChatNav}
      className="text-tColor bg-secondary hover:bg-hov cursor-pointer flex px-2 items-center"
    >
      {/* Users Profile Pics below */}
      <div className="relative">
        {img ? (
          <div className="rounded-full overflow-hidden w-[50px] h-[50px] border-[#ffffff] border-2">
            <img
              src={img}
              alt="user_img_thumbnail"
              className="object-cover w-full h-full"
            />
          </div>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[50px] h-[50px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>
        )}
        <div className="h-[10px] border-[#fffffff] border-[2px] w-[10px] rounded-full brightness-150 absolute right-0 bottom-1 bg-[#008000]"></div>
      </div>
      {/* Users Information */}
      <div className="pl-2 flex flex-col space-y-2 py-2">
        <div className="flex justify-between">
          <h1 className="font-semibold text-[16px]">
            {name ? name : "UserName"}
          </h1>
          {/* timestamp */}
          <h6 className="font-semibold text-[14px] text-tColor text-opacity-40">
            {timestamp ? timestamp : "8/20/2023"}
          </h6>
        </div>
        <div className="flex ">
          {/* last msg */}
          <p className="line-clamp-1 text-tColor text-opacity-50 text-[14px]">
            {lastMsg
              ? lastMsg
              : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et veniam doloribus laudantium ducimus ad incidunt."}
          </p>
          {/* New msg notification */}
          <span className="bg-notification rounded-full px-2 scale-75 font-semibold">
            4
          </span>
        </div>
      </div>
    </div>
  );
};

export default ChatBarItem;
