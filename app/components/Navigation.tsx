"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = (event: MouseEvent) => {
    event.preventDefault();
    setIsOpen(!isOpen);
  };
  return (
    <>
      <nav className="hidden xl:flex nav">
        <div className="logo">Dasol Jung</div>
        <div>
          <ul className="flex gap-8 text-2xl">
            <li>
              <Link className="underlined-a" href="#about">
                About
              </Link>
            </li>
            <li>
              <Link className="underlined-a" href="#experience">
                Experience
              </Link>
            </li>
            <li>
              <Link className="underlined-a" href="#stack">
                Stack
              </Link>
            </li>
            <li>
              <Link className="underlined-a" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <nav className="xl:hidden md:flex nav">
        <div className="logo">Dasol Jung</div>
        <div className="relative inline-block">
          <div
            className="flex flex-col justify-between h-6 w-[30px] cursor-pointer"
            onClick={toggleMenu}
          >
            <span
              className={`mobile-menu ${
                isOpen ? "transform rotate-45  translate-y-[10px]" : ""
              }`}
            ></span>
            <span className={`mobile-menu ${isOpen ? "opacity-0" : ""}`}></span>
            <span
              className={`mobile-menu ${
                isOpen ? "transform -rotate-45  translate-y-[-10px]" : ""
              }`}
            ></span>
          </div>
          <ul
            className={`absolute top-full right-0 bg-white w-fit overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? "max-h-[300px]" : "max-h-0"
            }`}
          >
            <li className="border-b-teal-300 border-b-2">
              <Link className="mobile-nav" href="#about" onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className="border-b-teal-300 border-b-2">
              <Link className="mobile-nav" href="#experience">
                Experience
              </Link>
            </li>
            <li className="border-b-teal-300 border-b-2">
              <Link className="mobile-nav" href="#stack">
                Stack
              </Link>
            </li>
            <li>
              <Link className="mobile-nav" href="#contact">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
