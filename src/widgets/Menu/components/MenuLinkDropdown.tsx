import React, { useState } from "react";
import { LinkHeaderProps } from "../types";
import MenuLink from "./MenuLink";

const MenuLinkDropdown = ({ name, url, setOpenMenu, submenu, variant, comingSoon }: LinkHeaderProps) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  return (
    <MenuLink
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
