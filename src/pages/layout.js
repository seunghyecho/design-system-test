import { useState } from "react";
import Router from "../routes/router";
import { Header, Footer } from "@flescompany/design-system";
import SideMenu from "../components/menu/sideMenu.js";
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
import styled from "styled-components";
const Body = styled.div`
  padding-top: 60px;
  padding-bottom: 60px;
`;
export default function Layout() {
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };
  const handleCloseMenu = () => {
    setOpenMenu(false);
  };
  const handleSearch = () => {
    window.location.href = "/search";
  };
  const handleCreateAccount = () => {
    window.location.href = "/user";
  };
  return (
    <div id="layout">
      <Header
        href="/"
        titleUrl={tLogo}
        onMenu={handleOpenMenu}
        onSearch={handleSearch}
        onCreateAccount={handleCreateAccount}
      />
      {openMenu ? <SideMenu onClick={handleCloseMenu} /> : null}
      <Body id="body">
        <Router />
      </Body>
      <Footer
        footers={[
          {
            img: {
              off: `${homeOff}`,
              on: `${homeOn}`,
            },
            title: "홈",
            href: "/",
          },
          {
            img: {
              off: `${userOff}`,
              on: `${userOn}`,
            },
            title: "프로필",
            href: "/user",
          },
          {
            img: {
              on: `${cashOn}`,
              off: `${cashOff}`,
            },
            title: "코인충전",
            href: "/cash",
          },
          {
            img: {
              on: `${settingsOn}`,
              off: `${settingsOff}`,
            },
            title: "환경설정",
            href: "/set",
          },
          {
            img: {
              on: `${wishOn}`,
              off: `${wishOff}`,
            },
            title: "오늘소원",
            href: "/dailyfortune",
          },
        ]}
      />
    </div>
  );
}
