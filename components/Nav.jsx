"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Nav = () => {
  const [hamburgerButton, setHamburgerButton] = useState(true);
  const [heightMenu, setHeightMenu] = useState("top-[-100%]");

  const handleMenuClick = (e) => {
    setHamburgerButton(!hamburgerButton);
    if (hamburgerButton == false) {
      setHeightMenu("top-[-100%]");
    } else {
      setHeightMenu("top-[9%]");
    }
  };

  return (
    <nav className="flex justify-between items-center sm:w-[70%] w-[80%] mx-auto my-10 sm:mt-14">
      <div>
        <p className="text-2xl sm:text-4xl font-light cursor-pointer">
          <Link href="/">Abhishek Singh</Link>
        </p>
      </div>

      <div
        className={`lg:static absolute bg-white z-30 lg:min-h-fit min-h-[60vh] left-0 lg:w-auto w-full flex items-center px-5 ${heightMenu}`}
      >
        <ul className="flex lg:flex-row flex-col lg:items-center lg:gap-[1vw] gap-8">
          <li className="m-4">
            <Link
              href="#about"
              className="font-semibold text-2xl hover:text-gray-500"
            >
              About
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="#explore"
              className="font-semibold text-2xl hover:text-gray-500"
            >
              Languages
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="#projects"
              className="font-semibold text-2xl hover:text-gray-500"
            >
              Projects
            </Link>
          </li>
          <li className="m-4">
            <Link
              href="#contact"
              className="font-semibold text-2xl hover:text-gray-500"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      <div className="flex items-center lg:hidden">
        {hamburgerButton ? (
          <Image
            src="/icons/menu-open.svg"
            height={35}
            width={35}
            className="text-3xl cursor-pointer "
            onClick={handleMenuClick}
            alt="menu"
          />
        ) : (
          <Image
            src="/icons/menu-close.svg"
            height={35}
            width={35}
            className="text-3xl cursor-pointer"
            onClick={handleMenuClick}
            alt="menu"
          />
        )}
      </div>
    </nav>
  );
};

export default Nav;
