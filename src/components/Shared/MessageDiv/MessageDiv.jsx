const MessageDiv = ({ messageInfo }) => {
  return (
    <div
      className={`flex  ${
        messageInfo.pos === "right" ? "flex-row-reverse" : "space-x-3"
      } mb-5`}
    >
      <div
        className={`${
          messageInfo.pos == "right" && "ml-3"
        } h-12 w-12 rounded-full bg-[#ffffff] overflow-hidden`}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAyE9c-n47GOYLsLzUunBnmHjEu_nuvVHbfEw-l07&s"
          alt=""
        />
      </div>
      <div className="bg-hov inline-block rounded-md px-5 py-2 max-w-[65%] md:max-w-[75%]">
        {/* UserName */}
        <h1 className="font-semibold text-[18px] pt-2">{messageInfo?.name}</h1>
        <p className="text-[16px] pt-1 pb-3">{messageInfo?.message}</p>
        <p className="flex justify-end font-thin text-[12px]">
          {messageInfo?.timeStamp}
        </p>
      </div>
    </div>
  );
};

export default MessageDiv;
