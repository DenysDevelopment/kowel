import Image from "next/image";
import Link from "next/link";
import React from "react";
import MenuNav from "../MenuNav";

const Header = (): JSX.Element => {
  const menus = [
    {
      id: 0,
      text: "Новини",
      href: "/news",
    },
    {
      id: 1,
      text: "Ковель - Базар",
      href: "/",
    },
    {
      id: 2,
      text: "Афіша подій",
      href: "/",
    },
    {
      id: 3,
      text: "Телефонна книга",
      href: "/",
    },
  ];

  return (
    <header className="header">
      <div className="container">
        <div className="header__body">
          <Link href={"/"}>
            <Image src={"/logo.svg"} alt="My Kowel" width={49} height={62} />
          </Link>
          <MenuNav links={menus}></MenuNav>
          <div className="header__info">
            <div className="header__weather">+21 C</div>
            <div className="header__login">потім зроблю, лень))</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
