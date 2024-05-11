"use client";
import { NextPage } from "next";
import { Link as ScrollLink } from "react-scroll";
import { RiMenu2Line, RiHomeFill } from "react-icons/ri";
import { IoCloseOutline } from "react-icons/io5";
import { BiSolidFoodMenu } from "react-icons/bi";
import { FaUsers, FaEnvelope } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { useState } from "react";

const links = [
  {
    icon: <RiHomeFill />,
    path: "home",
    name: "home",
    offset: 0,
  },
  {
    icon: <BiSolidFoodMenu />,
    path: "menu",
    name: "menu",
    offset: 0,
  },
  {
    icon: <FaUsers />,
    path: "about",
    name: "about",
    offset: 0,
  },
  {
    icon: <FaEnvelope />,
    path: "contact",
    name: "contact",
    offset: 0,
  },
];

interface Props {
  containerStyles: string;
  iconStyles: string;
  linkStyles: string;
}

const NavMobile: NextPage<Props> = ({
  containerStyles,
  linkStyles,
  iconStyles,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className={`${containerStyles}`}>
      {/* Nav trigger button */}
      <div className="cursor-pointer outline-none">
        <RiMenu2Line
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-white transition-all duration-200"
        ></RiMenu2Line>
      </div>
      <aside
        className={`${
          isOpen ? "right-0" : "-right-full"
        } bg-black fixed z-20 w-full p-10 top-0 bottom-0 transition-all duration-500`}
      >
        <div className="flex flex-col justify-between items-center h-full ">
          {/* nav close button */}
          <div
            className="cursor-pointer text-4xl text-white absolute w-10 h-10 left-8 bg-green flex items-center justify-center"
            onClick={() => setIsOpen(false)}
          >
            <IoCloseOutline></IoCloseOutline>
          </div>
          {/* logo */}
          <Link href="/">
            <Image src="/logo.svg" height={90} width={36} alt=""></Image>
          </Link>
          {/* links */}
          <div className="flex flex-col gap-y-8">
            {links.map((link, index) => {
              return (
                <ScrollLink
                  key={index}
                  to={link.path}
                  offset={link.offset}
                  smooth={false}
                  className="flex items-center gap-x-3 "
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`${iconStyles}`}>{link.icon}</div>
                  <div className={`'${linkStyles}`}>{link.name}</div>
                </ScrollLink>
              );
            })}
          </div>
          <ScrollLink to="reservation" smooth offset={-150}>
            <Button onClick={() => setIsOpen(false)}>Book a table</Button>
          </ScrollLink>
        </div>
      </aside>
    </div>
  );
};

export default NavMobile;
