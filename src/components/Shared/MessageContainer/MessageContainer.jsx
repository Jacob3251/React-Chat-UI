import Scrollbars from "react-custom-scrollbars";
import MessageDiv from "../MessageDiv/MessageDiv";
import MessageOperator from "../MessageOperator/MessageOperator";
import { useContext, useState } from "react";
import { DrawerContext } from "../../contexts/drawerContext";
import { ChatContext } from "../../contexts/chatContext";

const MessageContainer = ({ type, data }) => {
  const { setDisableChatBar, sidebarContentType } = useContext(DrawerContext);
  const [showBackBtn, setShowBackBtn] = useState(false);
  const { currentChat } = useContext(ChatContext);
  return (
    <div className="w-full flex flex-col">
      {/* top part */}
      <div className="text-tColor flex justify-between bg-secondary py-2 px-5">
        <h1 className="text-[22px] font-semibold">
          {sidebarContentType == "user_chat" ? currentChat.receiver : type}
        </h1>
        {/* button options */}
        <div className="flex items-center space-x-2">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 rounded-lg cursor-pointer drop-shadow-md duration-75 scale-90 hover:scale-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
              />
            </svg>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 rounded-lg cursor-pointer drop-shadow-md duration-75 scale-90 hover:scale-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
              />
            </svg>
          </div>
          <div className="relative z-50">
            <svg
              onClick={() => setShowBackBtn(!showBackBtn)}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-9 h-9 rounded-lg cursor-pointer drop-shadow-md duration-75 scale-90 hover:scale-100"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
            {showBackBtn && (
              <div className="absolute bg-divide px-5 py-2 -ml-12 rounded-md ">
                <button
                  onClick={() => setDisableChatBar(false)}
                  className="uppercase font-bold"
                >
                  back
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Middle Part */}
      <div className="flex-1 text-tColor px-2 py-2 ">
        <Scrollbars
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{ width: "100%", height: "100%" }}
        >
          {data.map((item) => (
            <MessageDiv messageInfo={item} key={item.id}></MessageDiv>
          ))}
        </Scrollbars>
      </div>
      {/* Message Operation Part */}
      <MessageOperator></MessageOperator>
    </div>
  );
};

export default MessageContainer;
