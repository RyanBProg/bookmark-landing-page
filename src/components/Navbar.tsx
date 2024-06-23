import { useState } from "react";
import logo from "../assets/images/logo-bookmark.svg";
import menuIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="flex justify-between py-10 px-6">
      <a href="#" className="z-10">
        <img src={logo} alt="logo" />
      </a>
      <button className="z-10">
        {menuOpen ? (
          <img
            src={closeIcon}
            alt="close menu icon"
            onClick={() => {
              setMenuOpen(false);
            }}
          />
        ) : (
          <img
            src={menuIcon}
            alt="mobile menu icon"
            onClick={() => {
              setMenuOpen(true);
            }}
          />
        )}
      </button>
      <nav
        className={`${
          !menuOpen && "hidden"
        } absolute w-full h-full bg-blue-600 left-0 top-0 pt-28`}>
        <ul className="flex flex-col items-center text-white w-full px-6">
          <li className="border-t-2 w-full text-center py-4">
            <a href="#">FEATURES</a>
          </li>
          <li className="border-t-2 w-full text-center py-4">
            <a href="#">PRICING</a>
          </li>
          <li className="border-t-2 w-full text-center py-4">
            <a href="#">CONTACT</a>
          </li>
          <li className="border-t-2 border-b-2 w-full text-center py-4">
            <a href="#">LOGIN</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
