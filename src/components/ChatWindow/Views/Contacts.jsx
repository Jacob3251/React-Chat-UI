import Scrollbars from "react-custom-scrollbars";
import { DrawerContext } from "../../contexts/drawerContext";
import { useContext, useState } from "react";
const Contacts = () => {
  const { setDisableChatBar } = useContext(DrawerContext);
  const [showBackBtn, setShowBackBtn] = useState(false);

  return (
    <div className="w-full">
      <div className="flex justify-center items-center h-full">
        <div className="bg-hov md:rounded-lg py-3 px-3 w-full h-screen md:h-auto md:w-1/3 text-tColor">
          <div className="flex justify-between">
            <div>
              <h1 className="font-semibold text-[20px] md:text-[22px]">
                Contacts
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

          {/* Search Bar Below */}

          <div className="bg-secondary flex px-2 py-3 rounded-lg space-x-2 ">
            <div>
              {" "}
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
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </div>
            <div className="w-full">
              <input
                type="text"
                name="searchContact"
                id="searchContact"
                placeholder="Search Contact..."
                className="w-full bg-secondary outline-none"
              />
            </div>
          </div>
          {/* Contact lists below */}

          <div className="h-screen md:h-[520px] ">
            <Scrollbars
              autoHideTimeout={1000}
              autoHideDuration={200}
              style={{ width: "100%", height: "100%" }}
            >
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
              <ContactListItems></ContactListItems>
            </Scrollbars>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;

const ContactListItems = () => {
  return (
    <div className="cursor-pointer bg-secondary p-2 mt-2 rounded-lg flex justify-between items-center px-5 mb-2">
      <div className="flex space-x-3 items-center">
        {/* image */}
        <div className="h-[50px] w-[50px] rounded-full overflow-hidden">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGAyE9c-n47GOYLsLzUunBnmHjEu_nuvVHbfEw-l07&s"
            alt=""
          />
        </div>
        {/* Contact Details */}
        <div>
          <h1>John Cena</h1>
          <h3>September 26 at 6:24 PM</h3>
        </div>
      </div>
    </div>
  );
};
