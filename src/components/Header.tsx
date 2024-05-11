"use client";
import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

import Nav from "./Nav";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";

interface Props {}

const Header: NextPage<Props> = ({}) => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setActive(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      className={`${
        active ? "bg-black-heavy p-4" : "bg-none py-8"
      } fixed top-0 w-full z-50 left-0 right-0 transition-all duration-200 `}
    >
      <div className="container mx-auto ">
        {/* logo, nav, btn */}
        <div className="flex items-center justify-between">
          {/* logo */}
          <Link href="/">
            <Image src="/logo.svg" width={75} height={30} alt="logo"></Image>
          </Link>
          {/* nav */}
          <Nav
            containerStyles="hidden xl:flex gap-x-12 text-white"
            linkStyles="capitalize"
          ></Nav>
          {/* btn */}
          <ScrollLink to="reservation" smooth={true}>
            <Button variant="orange" size="sm">
              Book a table
            </Button>
          </ScrollLink>
          {/* mobile nav */}
          <NavMobile
            containerStyles="xl:hidden"
            iconStyles="text-3xl"
            linkStyles="capitalize"
          ></NavMobile>
        </div>
      </div>
    </div>
  );
};

export default Header;
