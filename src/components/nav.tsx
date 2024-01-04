import React, { useState } from "react";
import { Link } from "gatsby";
import { Menu } from "feather-icons-react";



export default function Nav() {
  const navLinks = [
    { title: "Woman", url: "/woman" },
    { title: "Man", url: "/man" },
    { title: "Contact", url: "/contact" },
  ];

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="flex flex-col items-start md:flex-row md:justify-between md:items-center px-5 md:px-0">

        <div className="flex items-center">
          <button onClick={toggleMenu} className="text-white md:hidden ml-0">
            <Menu size={24} />
          </button>
        </div>
        <ul
          className={`${
            showMenu ? "block" : "hidden"
          } md:text-white md:text-center md:flex-grow md:flex md:justify-center md:items-center md:space-x-5`}
        >
          {navLinks.map((link, index) => (
            <li key={index}>
              <Link
                to={link.url}
                className="text-white hover:text-gray-300 py-3 block"
              >
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}