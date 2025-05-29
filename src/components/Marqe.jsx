import React from "react";
import { motion } from "motion/react";

function Marqe({ imagesurls, direction }) {
  return (
    <div className=" flex w-full gap-[143vw] overflow-hidden">
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-257%" }}
        animate={{ x: direction === "left" ? "-257%" : "0" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex py-5.5 gap-20 h-[7.8vh] whitespace-nowrap pr-40 mt-4"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
      <motion.div
        initial={{ x: direction === "left" ? "0" : "-282%" }}
        animate={{ x: direction === "left" ? "-282%" : "0" }}
        transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        className="flex py-5.5 gap-20 h-[7.8vh] whitespace-nowrap  mt-4"
      >
        {imagesurls.map((url, index) => (
          <img key={index} src={url} className="" />
        ))}
      </motion.div>
    </div>
  );
}



export default Marqe;
