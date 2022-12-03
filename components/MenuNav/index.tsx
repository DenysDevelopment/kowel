import Link from "next/link";
import React from "react";
import { IHeaderProps } from "../Header/Header.props";

const MenuNav = ({ links }: IHeaderProps): JSX.Element => {
  const [linksMenu, setLinksMenu] = React.useState(links);

  return (
    <div className="header__menu menu">
      <button className="menu__icon icon-menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav className="menu__body">
        <ul className="menu__list">
          {linksMenu &&
            linksMenu.map((link) => (
              <li key={`${link.id}_${link.text}`}>
                <Link href={link.href} className="menu__link">
                  {link.text}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
    </div>
  );
};
export default MenuNav;
