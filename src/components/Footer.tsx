"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import Link from "next/link";
import Image from "next/image";
import { NextPage } from "next";

interface Props {}

const Footer: NextPage<Props> = ({}) => {
  return (
    <motion.footer
      variants={fadeIn("left", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0 }}
      className="bg-footer bg-cover bg-no-repeat text-white pt-16"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-between xl:flex-row ">
          {/* logo */}
          <div className="w-[300px] mb-8 xl:mb-0">
            <Link href="/">
              <Image src="/logo.svg" width={90} height={36} alt=""></Image>
            </Link>
          </div>
          {/* grid items */}
          <div className="flex-1 grid grid-cols-1 xl:grid-cols-3 gap-[50px] mb-8 xl:mb-16">
            {/* blog */}
            <div>
              <h4 className="font-semibold mb-5">Blog</h4>
              <ul className="flex flex-col gap-y-6 text-sm ">
                <li>
                  <Link href="/">nam ad illum magni, ullam quos saepe ut.</Link>
                </li>
                <li>
                  <Link href="/">
                    doloribus quibusdam, eaque iusto, commodi vitae
                  </Link>
                </li>
                <li>
                  <Link href="/"> At, quaerat possimus.</Link>
                </li>
                <li>
                  <Link href="/">
                    Accusamus possimus ab, labore maxime consectetur
                  </Link>
                </li>
              </ul>
            </div>
            {/* item */}
            <div>
              <h4 className="font-semibold mb-5">Item</h4>
              <ul className="flex flex-col gap-y-6 text-sm ">
                <li>
                  <Link href="/">nam ad illum magni, ullam quos saepe ut.</Link>
                </li>
                <li>
                  <Link href="/">
                    doloribus quibusdam, eaque iusto, commodi vitae
                  </Link>
                </li>
                <li>
                  <Link href="/"> At, quaerat possimus.</Link>
                </li>
                <li>
                  <Link href="/">
                    Accusamus possimus ab, labore maxime consectetur
                  </Link>
                </li>
              </ul>
            </div>

            {/* socials */}
            <div>
              <h4 className="font-semibold mb-5">Socials</h4>
              <ul className="flex flex-col gap-y-6 text-sm ">
                <li>
                  <Link href="/">Youtube</Link>
                </li>
                <li>
                  <Link href="/">LinkedIn</Link>
                </li>
                <li>
                  <Link href="/">Twitter</Link>
                </li>
                <li>
                  <Link href="/">Facebook</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-4 border-t border-white/10">
          <p className="text-white/60 text-center text-sm">
            Copyright &copy; W&apos;Food 2023
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
