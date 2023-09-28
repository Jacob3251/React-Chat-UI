import DrawerContents from "../DrawerContents/DrawerContents";
import DrawerManager from "../contexts/drawerContext";

const HomeLayout = () => {
  return (
    <DrawerManager>
      <DrawerContents></DrawerContents>
    </DrawerManager>
  );
};

export default HomeLayout;
