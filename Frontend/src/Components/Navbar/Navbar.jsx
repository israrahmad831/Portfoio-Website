import React from "react";

const Navbar = () => {
  return (
    <>
    <div className="flex flex-row justify-between w-full h-full">
      <div className="w-full h-full pt-3 pl-3">
        logo
      </div>
      <div className="w-full h-full flex justify-end pt-3">
        <ul className="flex flex-row gap-5 pr-3">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Experience</li>
          <li>Projects</li>
          <li>Resume</li>
        </ul>
      </div>
    </div>
    </>
  );
};

export default Navbar;
