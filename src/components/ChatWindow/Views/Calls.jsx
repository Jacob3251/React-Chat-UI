import { useContext, useState } from "react";
import { DrawerContext } from "../../contexts/drawerContext";
import Scrollbars from "react-custom-scrollbars";

const Calls = () => {
  const { setDisableChatBar } = useContext(DrawerContext);
  const [showBackBtn, setShowBackBtn] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-full">
        <div className="bg-hov md:rounded-lg py-3 px-3 w-full h-screen md:h-auto md:w-1/2 text-tColor">
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold text-[20px] md:text-[22px]">
                Calls
              </h1>
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
          {/* Call lists below */}

          <div className="h-screen md:h-[520px] ">
            <Scrollbars
              autoHideTimeout={1000}
              autoHideDuration={200}
              style={{ width: "100%", height: "100%" }}
            >
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
              <CallListItems></CallListItems>
            </Scrollbars>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calls;

const CallListItems = () => {
  return (
    <div className="bg-secondary p-2 mt-2 rounded-lg flex justify-between items-center px-5 mb-2">
      <div className="flex space-x-3 items-center">
        {/* image */}
        <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAyE9c-n47GOYLsLzUunBnmHjEu_nuvVHbfEw-l07&s"
            alt=""
          />
        </div>
        {/* Call Details */}
        <div>
          <h1>John Cena</h1>
          <h3>September 26 at 6:24 PM</h3>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  );
};
