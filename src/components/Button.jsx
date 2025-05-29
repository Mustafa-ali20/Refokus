import React from "react";
import { IoIosReturnRight } from "react-icons/io";
import { motion } from "motion/react";

function Button({ title = "Get Started" }) {
  return (
    <>
      <motion.div
        initial="initial"
        whileHover="hovered"
        transition={{ ease: [0.22, 1, 0.36, 1] }}
        className="min-w-40 px-3 py-2 bg-zinc-100 text-black rounded-full relative flex items-center justify-between overflow-hidden"
      >
        <motion.span
          variants={{ initial: { y: 0 }, hovered: { y: "-118%" } }}
          transition={{ delay: 0 }}
          className="text-md font-semibold ml-2"
        >
          {title}
        </motion.span>

        <motion.span
          variants={{ initial: { y: "110%" }, hovered: { y: 0 } }}
          transition={{ delay: 0 }}
          className="text-md font-semibold ml-2 absolute inset-0 left-3 top-[20%]"
        >
          {title}
        </motion.span>

        <motion.span
          variants={{ initial: { y: 0 }, hovered: { y: "-110%" } }}
          transition={{ delay: 0.1 }}
          className="text-2xl"
        >
          <IoIosReturnRight />
        </motion.span>

        <motion.span
          variants={{ initial: { y: "110%" }, hovered: { y: 0 } }}
          transition={{ delay: 0.1 }}
          className="text-2xl absolute inset-0 left-[83%] top-[20%]"
        >
          <IoIosReturnRight />
        </motion.span>
      </motion.div>
    </>
  );
}

export default Button;
