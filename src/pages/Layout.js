import { useState } from "react";
import { Header, Footer } from "@flescompany/design-system";
import Body from "./Body.js";

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
import SideMenu from "../components/menu/sideMenu.js";

export default function Layout() {
  const [open, setOpen] = useState(false);
  const handleMenu = (e) => {
    setOpen(!open);
    console.log(setOpen);
  };
  return (
    <>
      <Header
        titleUrl={tLogo}
        onMenu={handleMenu}
        onSearch={() => {}}
        onCreateAccount={() => {}}
      />
      {open ? <SideMenu /> : null}
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
