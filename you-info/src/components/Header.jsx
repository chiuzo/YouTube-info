import React from "react";
import NavigationDrawer from "./NavigationDrawer";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="flex justify-between items-center px-4 py-3">
      <Link to="/" className="text-xl font-bold text-blue-600 hover:underline">
        YouInfo
      </Link>
      <NavigationDrawer />
    </div>
  );
};

export default Header;
