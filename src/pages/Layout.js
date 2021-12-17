import { useState } from "react";
import { Header, Footer } from "@flescompany/design-system";
import Body from "./Body.js";
import SideMenu from "../components/menu/sideMenu.js";
// img
import tLogo from "../assets/t_logo.png";
import homeOff from "../assets/off_home.svg";
import userOff from "../assets/off_user.svg";
import cashOff from "../assets/off_cash.svg";
import settingsOff from "../assets/off_settings.svg";
import wishOff from "../assets/off_wish.svg";
import homeOn from "../assets/on_home.svg";
import userOn from "../assets/on_user.svg";
import cashOn from "../assets/on_cash.svg";
import settingsOn from "../assets/on_settings.svg";
import wishOn from "../assets/on_wish.svg";

export default function Layout() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <>
      <Header
        titleUrl={tLogo}
        onMenu={handleOpenMenu}
        onSearch={() => console.log("go searchContents")}
        onCreateAccount={() => console.log("go profile")}
      />
      {openMenu ? <SideMenu onClick={handleCloseMenu} /> : null}
      <Body />
      <Footer
        footers={[
          {
            img: {
              off: `${homeOff}`,
              on: `${homeOn}`,
            },
            title: "홈",
          },
          {
            img: {
              off: `${userOff}`,
              on: `${userOn}`,
            },
            title: "프로필",
          },
          {
            img: {
              on: `${cashOn}`,
              off: `${cashOff}`,
            },
            title: "코인충전",
          },
          {
            img: {
              on: `${settingsOn}`,
              off: `${settingsOff}`,
            },
            title: "환경설정",
          },
          {
            img: {
              on: `${wishOn}`,
              off: `${wishOff}`,
            },
            title: "오늘소원",
          },
        ]}
      />
    </>
  );
}
