import { useContext, useState } from "react";
import { DrawerContext } from "../../contexts/drawerContext";
import Scrollbars from "react-custom-scrollbars";
import toast from "react-hot-toast";

const NewGroup = () => {
  const { setDisableChatBar } = useContext(DrawerContext);
  const [showSearchList, setShowSearchList] = useState(false);
  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-full">
        <div className="bg-hov rounded-lg p-10 text-tColor">
          <div className="flex items-center justify-center space-x-5">
            <div className="bg-notification p-5 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                />
              </svg>
            </div>
            <input
              className="bg-hov outline-none border-secondary focus:border-notification py-2 border-b-[2px]"
              type="text"
              name="grpName"
              placeholder="Group name"
            />
          </div>
          {/* Button */}
          {showSearchList === false && (
            <div className="my-5 flex justify-end items-center space-x-1">
              <button
                onClick={() => setDisableChatBar(false)}
                className="rounded-md md:hidden hover:bg-[#C70039] font-semibold text-tColor hover:drop-shadow-md px-2 py-2"
              >
                Cancel
              </button>
              <button
                onClick={() => setShowSearchList(!showSearchList)}
                className="rounded-md  hover:bg-[#00A36C] font-semibold text-tColor hover:drop-shadow-md px-2 py-2"
              >
                Next
              </button>
            </div>
          )}

          {showSearchList && <SearchList></SearchList>}
          {showSearchList && (
            <div className="flex justify-end space-x-1">
              {/* For Smaller resolution devices */}
              <button
                onClick={() => setDisableChatBar(false)}
                className="md:hidden rounded-md bg-secondary duration-300 hover:bg-[#C70039] font-semibold text-tColor hover:drop-shadow-md px-2 py-2"
              >
                Cancel
              </button>
              {/* for higher resolution devices */}
              <button
                onClick={() => setShowSearchList(!showSearchList)}
                className="hidden md:block rounded-md bg-secondary duration-300 hover:bg-[#C70039] font-semibold text-tColor hover:drop-shadow-md px-2 py-2"
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  toast.success("Group Created Successfully");
                  setDisableChatBar(false);
                }}
                className="rounded-md bg-secondary duration-300 hover:bg-notification font-semibold text-tColor hover:drop-shadow-md px-2 py-2"
              >
                Create
              </button>
            </div>
          )}
        </div>
      </div>
      {/* <button
        onClick={() => setDisableChatBar(false)}
        className="bg-hov hover:brightness-110 duration-300 px-10 py-2 text-[18px] font-semibold uppercase rounded-md md:hidden"
      >
        Back
      </button> */}
    </div>
  );
};

export default NewGroup;

const SearchList = () => {
  return (
    <div className="px-2 md:px-0 py-5">
      <h1>
        <span className="font-semibold">Add Members </span>
        <span className="text-[#808080]">
          <span>1</span> / 2000
        </span>
      </h1>
      {/* search list below */}
      <div className="bg-primary p-3 space-y-2 rounded-lg mt-5 h-[320px]">
        <Scrollbars
          autoHideTimeout={1000}
          autoHideDuration={200}
          style={{ width: "100%", height: "100%" }}
        >
          <SearchListItem
            link="https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60"
            name="Monkey D Luffy"
          ></SearchListItem>
          <SearchListItem
            link="https://img.freepik.com/premium-photo/portrait-serious-young-business-woman_33839-2886.jpg"
            name="Ariana Grnade"
          ></SearchListItem>
          <SearchListItem
            link="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT40BSKbnE1pK6EawMRT2AnQjjgCOWTz2heNA&usqp=CAU"
            name="Ella Vinsmoke"
          ></SearchListItem>
          <SearchListItem
            link="https://img.freepik.com/premium-photo/portrait-professional-employee-man-with-serious-face-adjusting-necktie-formal-suit-isolated-white-businessman_545934-8536.jpg"
            name="Vinsmoke Sanji"
          ></SearchListItem>
          <SearchListItem
            link="https://lh3.googleusercontent.com/Ryg5ih-fOWbpEGDpbJYJz5RTq3_28Tvo2h3JQRCdiz16lw5ghitDMN6hcWA57g0d6_8VOqQYcCemRBOfZGQA64ZKkFOn71zuF1LDsXwCh4ywF-_z6VqxbBqmbQvK_-PWfZcztxDd1WDTEEUHX6GdP60"
            name="Gold D Roger"
          ></SearchListItem>
        </Scrollbars>
      </div>
    </div>
  );
};

const SearchListItem = ({ link, name, timestamp }) => {
  return (
    <div className="flex space-x-2 bg-hov rounded-lg p-2 mb-2 cursor-pointer">
      <div className="overflow-hidden  rounded-full h-10 w-10">
        <img className="object-cover h-full w-full" src={`${link}`} alt="" />
      </div>
      <div>
        <h3 className="text-[14px]">{name}</h3>
        <h6 className="text-[12px]">
          last seen{" "}
          <span className="text-[10px] italic">
            {timestamp ? timestamp : "2 / 2 / 2023"}
          </span>
        </h6>
      </div>
    </div>
  );
};
