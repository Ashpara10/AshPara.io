import React from "react";

const NavList: React.FC = ({ children }) => {
  return (
    <ul className="w-full px-3 invisible md:visible flex items-center justidy-center font-medium text-base gap-x-3">
      {children}
    </ul>
  );
};

export default NavList;
