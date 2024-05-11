"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "./ui/button";
import { NextPage } from "next";

interface Props {}

const About: NextPage<Props> = ({}) => {
  return (
    <section
      className=" grid grid-cols-1 xl:grid-cols-2 gap-x-[74px] p-8 md:p-12 xl:p-0 items-center"
      id="about"
    >
      {/* text */}
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
        className="xl:pl-[135px]"
      >
        <h1 className="mb-9">Let&apos;s Talk About W&apos;Food</h1>
        <p className="mb-8">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos quis
          voluptatum, necessitatibus sapiente dolore vero! Ipsam aliquam at
          totam explicabo culpa eligendi officiis? Neque ut iste earum vel, enim
          dignissimos!
        </p>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere hic
          dolorum commodi, repellendus reiciendis assumenda quidem? Consequatur
          aperiam repellat laudantium excepturi vitae laborum atque! Hic tempore
          minus enim cum unde?
        </p>
        <Button>Read more</Button>
      </motion.div>
      {/* image */}
      <motion.div
        variants={fadeIn("left", 0.4)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.2 }}
      >
        <Image
          src="/about/img.png"
          width={705}
          height={771}
          alt=""
          className="hidden xl:flex"
        ></Image>
      </motion.div>
    </section>
  );
};

export default About;