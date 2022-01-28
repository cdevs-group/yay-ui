import React, { useState } from "react";
import { LinkHeaderProps } from "../types";
import MenuLink from "./MenuLink";

const MenuLinkDropdown = ({ name, url, setOpenMenu, submenu, variant, comingSoon, colorTheme }: LinkHeaderProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <MenuLink
      colorTheme={colorTheme}
      name={name}
      url={url}
      setOpenMenu={setOpenMenu}
      submenu={submenu}
      setOpenDropdown={setOpenDropdown}
      openDropdown={openDropdown}
      variant={variant}
      comingSoon={comingSoon}
    />
  );
};

export default MenuLinkDropdown;
