import React, { useState } from "react";
import Product from "./Product";
import { motion } from "motion/react";

function Products() {
  var products = [
    {
      title: "Aritel",
      discription:
        "With a continous 3D animation we showcase Artiqel approach and show how migration data translate into real estate",
      live: true,
      case: false,
      hoverClass: "bg-gradient-to-l from-[#1e3a8a] to-[#38bdf8]",
    },
    {
      title: "TTR",
      discription:
        "We created an interactive site using generative AI to allow to engage with our thinking about Ai, industry trends and design",
      live: true,
      case: false,
      hoverClass: "bg-gradient-to-r from-indigo-600 to-blue-500",
    },
    {
      title: "YIR 2022",
      discription:
        "Our second year was filled with great events, exciting project awards and amazing people so we made another showcase to celebrate",
      live: true,
      case: false,
      hoverClass: "bg-gradient-to-r from-violet-600 to-indigo-500",
    },
    {
      title: "Yahoo!",
      discription:
        "We enhanced the NEW York Fashion Week. by creating a fully digital AR fashion experience for Yahoo and Maisie Wilen. featuring holographic 3D models and an interagted web design",
      live: true,
      case: true,
      hoverClass: "bg-gradient-to-r from-purple-700 to-violet-500",
    },
    {
      title: "Rainfall",
      discription:
        "We crafted a website for Rainfall Ventures, developing prototypes and customs code that ultimately allows their team to update content regularly and with ease",
      live: true,
      case: false,
      hoverClass: "bg-gradient-to-l from-[#0f1f4b] to-[#3a8dfb]",
    },
  ];

  const videos = [
    `${import.meta.env.BASE_URL}videos/chargeflow-169.webm`,
    `${import.meta.env.BASE_URL}videos/cula-169.webm`,
    `${import.meta.env.BASE_URL}videos/deepset-169.webm`,
    `${import.meta.env.BASE_URL}videos/umault-169.webm`,
    `${import.meta.env.BASE_URL}videos/layoutland-169.webm`,
  ];

  const [pos, setPos] = useState();
  const mover = (val) => {
    setPos(val * 23);
  };

  return (
    <div className="mt-25 relative">
      {products.map((val, i) => (
        <Product val={val} key={i} mover={mover} count={i} />
      ))}

      <div className="w-full h-full top-0 absolute pointer-events-none hidden lg:block">
        <motion.div
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
          className="w-[30rem] h-[23rem] absolute  left-[44%] overflow-hidden"
        >
          {videos.map((src, i) => (
            <motion.div
              key={i}
              animate={{ y: -pos + `rem` }}
              transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.4 }}
              className="w-full h-full overflow-hidden"
            >
              <video
                src={src}
                className="w-full h-full object-cover rounded-xl shadow-3xl"
                autoPlay
                loop
                muted
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default Products;
