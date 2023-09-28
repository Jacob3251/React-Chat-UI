import { useContext } from "react";
import { DrawerContext } from "../contexts/drawerContext";
import Default from "./Views/Default";
import Settings from "./Views/Settings";
import SavedMessages from "./Views/SavedMessages";
import Calls from "./Views/Calls";
import Contacts from "./Views/Contacts";
import NewChannel from "./Views/NewChannel";
import NewGroup from "./Views/NewGroup";
import AddAccount from "./Views/AddAccount";
// import Modal from "../Shared/Modal/Modal";

const ChatWindow = () => {
  const { sidebarContentType } = useContext(DrawerContext);

  return (
    <>
      {sidebarContentType === "default" && <Default></Default>}
      {sidebarContentType === "add_account" && <AddAccount></AddAccount>}
      {sidebarContentType === "new_group" && <NewGroup></NewGroup>}
      {sidebarContentType === "new_channel" && <NewChannel></NewChannel>}
      {sidebarContentType === "contacts" && <Contacts></Contacts>}
      {sidebarContentType === "calls" && <Calls></Calls>}
      {sidebarContentType === "saved_messages" && (
        <SavedMessages></SavedMessages>
      )}
      {sidebarContentType === "settings" && <Settings></Settings>}
    </>
  );
};

export default ChatWindow;

// Custom Modal Content
//  const [isModalOpen, setIsModalOpen] = useState(false);

//  const openModal = () => {
//    setIsModalOpen(true);
//  };

//  const closeModal = () => {
//    setIsModalOpen(false);
//  };
//
{
  /* <button
        onClick={openModal}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Open Modal
      </button> */
}
{
  /* <Modal isOpen={isModalOpen} onClose={closeModal}>
        
        <div className="text-primary relative">
          <h1 className="text-lg font-bold mb-4">Modal Content</h1>
          <p>This is some modal content.</p>
          <button
            onClick={closeModal}
            className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Close Modal
          </button>
        </div>
      </Modal> */
}
