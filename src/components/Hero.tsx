"use client";
import { NextPage } from "next";
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";
import { Button } from "./ui/button";

interface Props {}

const Hero: NextPage<Props> = ({}) => {
  return (
    <section
      className="bg-hero bg-no-repeat relative xl:bg-cover xl:h-[1098px] py-40 pb-32 xl:py-0"
      id="home"
    >
      <div className="container mx-auto">
        {/* text & image */}
        <div className="flex items-center xl:h-[960px]">
          {/* text */}
          <div className="w-full max-w-[460px] text-center xl:text-left">
            <motion.h1
              className="text-white mb-7"
              variants={fadeIn("down", 0.2)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              A taste of local <br />
              flavors
            </motion.h1>
            <motion.p
              variants={fadeIn("down", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white font-semibold mb-7"
            >
              by: <span className="text-orange">Sourish Biswas</span>
            </motion.p>
            <motion.p
              variants={fadeIn("down", 0.6)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
              className="text-white mb-12 max-w-lg mx-auto xl:max-w-none xl:mx-0"
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              repudiandae explicabo distinctio quidem dolor aliquam saepe enim
              laudantium iste. Distinctio amet itaque fuga expedita perferendis
              ipsa sequi consequuntur rerum consequatur?
            </motion.p>
            <motion.div
              variants={fadeIn("down", 0.8)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.4 }}
            >
              <Button>Let&apos;s eat</Button>
            </motion.div>
          </div>
          {/* Image */}
          <motion.div
            variants={fadeIn("up", 0.8)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.1 }}
            className="hidden xl:flex xl:absolute xl:top-[200px] xl:right-0"
          >
            <Image
              src="/hero/plate.png"
              alt="Plage of momo"
              width={756}
              height={682}
            ></Image>
          </motion.div>
        </div>
      </div>
      {/* Coffee Image */}
      <motion.div
        variants={fadeIn("up", 1.2)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.1 }}
        className="hidden xl:flex xl:relative xl:-top-36"
      >
        <Image
          src="/hero/coffee.png"
          width={386}
          height={404}
          alt="coffee image"
        ></Image>
      </motion.div>
    </section>
  );
};

export default Hero;
