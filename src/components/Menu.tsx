"use client";
import Image from "next/image";
import Link from "next/link";
import { IoIosArrowForward, IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { NextPage } from "next";

const menu = [
  {
    img: "/menu/item-1.png",
    title: " Lorem, ipsum dolor.",
    price: "$44.00",
  },
  {
    img: "/menu/item-2.png",
    title: "consectetur adipisicing",
    price: "$64.00",
  },
  {
    img: "/menu/item-3.png",
    title: "Odit sit veniam",
    price: "$32.00",
  },
  {
    img: "/menu/item-4.png",
    title: "ab inventore nam",
    price: "$92.00",
  },
];
interface Props {}

const Menu: NextPage<Props> = ({}) => {
  return (
    <section className="relative py-12 xl:py-24 bg-menu" id="menu">
      <div className="container mx-auto">
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="max-w-[570px] mx-auto text-center xl:text-right"
        >
          <h2 className="mb-3">Favourites Menu</h2>
          <Link
            href="/"
            className="text-green flex xl:justify-end items-center mb-16 justify-center"
          >
            View all{" "}
            <IoIosArrowRoundForward className="text-3xl"></IoIosArrowRoundForward>
          </Link>
        </motion.div>
        {/* menu grid */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 md:gap-[15px] xl:grid-cols-4 gap-[30px]"
        >
          {menu.map((item, index) => {
            return (
              <div
                key={index}
                className="max-w-[270px] bg-white shadow-primary mx-auto xl:mx-0 group"
              >
                {/* image */}
                <div className="overflow-hidden ">
                  <Image
                    src={item.img}
                    width={270}
                    height={270}
                    alt=""
                    className="group-hover:scale-110 transition-all duration-300"
                  ></Image>
                </div>
                {/* title and price */}
                <div className="pt-[20px] pb-[28px] px-[30px]">
                  <Link href="/">
                    <h3 className="font-poppins text-black mb-[14px]">
                      {item.title}
                    </h3>
                  </Link>
                  <div className="text-xl font-poppins font-semibold text-orange"></div>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Menu;