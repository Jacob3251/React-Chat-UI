import { useContext, useState } from "react";
import Scrollbars from "react-custom-scrollbars";
import { DrawerContext } from "../../contexts/drawerContext";

const Settings = () => {
  const { setDisableChatBar } = useContext(DrawerContext);
  const [name, setName] = useState("John Doe");
  const [phoneNumber, setPhoneNumber] = useState("01754-XXXXXX");
  const [userName, setUserName] = useState("@xyz235");
  return (
    <Scrollbars
      autoHideTimeout={1000}
      autoHideDuration={200}
      style={{ width: "100%", height: "100%" }}
    >
      <div className="text-tColor px-5">
        <h1 className="mt-5 text-[28px] font-semibold">Settings</h1>
        <div>
          {/* Profile Image Change Div Below */}
          <div className="flex justify-center py-5">
            <div className="relative">
              <div className="overflow-hidden h-[100px] md:h-[100px] w-[100px] md:w-[100px] rounded-full">
                <img
                  src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YXZhdGFyfGVufDB8fDB8fHww&w=1000&q=80"
                  alt=""
                />
              </div>
              {/* change image button */}
              <div className="absolute right-0 bottom-0 bg-notification text-white border-[2px] border-hov p-1 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 text-[#ffffff]"
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
            </div>
          </div>
          <div className="my-[30px] md:w-[60%] mx-auto px-[30px] bg-hov rounded-lg">
            <div className="md:space-x-10 flex flex-row justify-between items-center py-2 pl-2 text-[14px] md:text-[18px] ">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-8 h-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <label htmlFor="Name" className="font-bold">
                  Name
                </label>
              </div>
              <input
                className="text-notification  bg-hov text-center  py-2"
                type="text"
                id="Name"
                // placeholder="Set Username"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>
            <div className="md:space-x-10 flex flex-row justify-between items-center py-2 pl-2 text-[14px] md:text-[18px] ">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>

                <label htmlFor="phoneNumber" className="font-bold">
                  Phone Number
                </label>
              </div>
              <input
                className="text-notification  bg-hov text-center  py-2"
                type="text"
                id="phoneNumber"
                // placeholder="Set Username"
                value={phoneNumber}
                onChange={(event) => setPhoneNumber(event.target.value)}
              />
            </div>
            <div className="md:space-x-10 flex flex-row justify-between items-center py-2 pl-2 text-[14px] md:text-[18px] ">
              <div className="flex items-center space-x-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>

                <label htmlFor="userName" className="font-bold">
                  username
                </label>
              </div>
              <input
                className="text-notification  bg-hov text-center  py-2"
                type="text"
                id="userName"
                // placeholder="Set Username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
              />
            </div>
          </div>

          <div className=" flex justify-center space-x-5">
            <button
              onClick={() => setDisableChatBar(false)}
              className="bg-hov hover:brightness-110 duration-300 px-10 py-2 text-[18px] font-semibold uppercase rounded-md md:hidden"
            >
              Back
            </button>
            <button className="bg-notification hover:brightness-110 duration-300 px-10 py-2 text-[18px] font-semibold uppercase rounded-md">
              Save
            </button>
          </div>
        </div>
      </div>
    </Scrollbars>
  );
};

export default Settings;
