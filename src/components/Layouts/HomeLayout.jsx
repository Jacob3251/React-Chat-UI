import { Toaster } from "react-hot-toast";
import DrawerContents from "../DrawerContents/DrawerContents";
import DrawerManager from "../contexts/drawerContext";

const HomeLayout = () => {
  return (
    <DrawerManager>
      <DrawerContents></DrawerContents>
      <Toaster position="top-center" reverseOrder={false} />
    </DrawerManager>
  );
};

export default HomeLayout;
