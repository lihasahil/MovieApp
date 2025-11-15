import Navbar from "../Navbar";
import { Outlet } from "react-router";

function HeaderLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export default HeaderLayout;
