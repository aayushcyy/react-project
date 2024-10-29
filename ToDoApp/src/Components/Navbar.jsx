import React from "react";
import ThemeBtn from "./ThemeBtn";

function Navbar() {
  return (
    <div className="flex w-full py-3 px-4 md:px-28 border-b-2 justify-between items-center bg-white dark:bg-gray-900 dark:border-gray-600">
      <div className="flex justify-center items-center dark:text-white text-black">
        <img
          className="w-9 cursor-pointer"
          src="/src/assets/logo.png"
          alt="Logo"
        />
        <h1 className="text-2xl font-medium mb-1">TaskOn</h1>
      </div>
      <div>
        <ThemeBtn />
      </div>
    </div>
  );
}

export default Navbar;
