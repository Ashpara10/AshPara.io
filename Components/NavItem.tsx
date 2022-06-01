import React, { MouseEventHandler } from "react";

type NavItem = {
  children: React.ReactNode;
  className?: string;
  onClick: MouseEventHandler;
};

const NavItem = ({ children, className, onClick }: NavItem) => {
  return (
    <li onClick={onClick} className={`px-2 ${className}`}>
      {children}
    </li>
  );
};

export default NavItem;
