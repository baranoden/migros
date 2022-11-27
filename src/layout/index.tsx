import { Outlet } from "react-router-dom";
import BottomBar from "./bottomBar/BottomBar";
import TopBar from "./topBar/TopBar";
const Layout = () => {
  return (
    <>
      <TopBar />
      <Outlet />
      <BottomBar />
    </>
  );
};
export default Layout;
