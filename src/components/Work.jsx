import React, { useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";

function Work() {
  const [images, setImages] = useState([
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb13c9d1cdce681e0e73_10.webp",
      top: "44%",
      left: "50%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197e4/66c3bb125095523f5ce87a2a_9.webp",
      top: "60%",
      left: "53%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67b89d9110d0a5d6615f273a_umaultAwards-p-1600.png",
      top: "50%",
      left: "38%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/669d6f1f10e02f2cb6320ad9_669ad38beb29c99f7dfe1353_mockup-v3%402x%202-p-1600.webp",
      top: "56%",
      left: "44%",
      isActive: false,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/66b1608a4f57abd6f4bb1b06_cover-home-p-1600.webp",
      top: "70%",
      left: "37%",
      isActive: false,
    },
  ]);

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (data) => {
    function imagesShow(arr) {
      setImages((prev) =>
        prev.map((item, i) =>
          arr.indexOf(i) === -1
            ? { ...item, isActive: false }
            : { ...item, isActive: true }
        )
      );
    }

    switch (Math.floor(data * 100)) {
      case 0:
        imagesShow([]);
        break;
      case 1:
        imagesShow([0]);
        break;
      case 3:
        imagesShow([0, 1]);
        break;
      case 4:
        imagesShow([0, 1, 2]);
        break;
      case 5:
        imagesShow([0, 1, 2, 3]);
        break;
      case 6:
        imagesShow([0, 1, 2, 3, 4]);
        break;
      case 8:
        imagesShow([0, 1, 2, 3, 4, 5]);
        break;
    }
  });

  return (
    <div className="w-full">
      <div className="relative max-w-screen-xl mx-auto text-center">
        <h1 className="text-[30vw] md:text-[25vw] lg:text-[30vw] leading-none text-white font-medium tracking-tight select-none pt-23">
          work
        </h1>
        <div className="hidden md:block w-full h-full absolute top-0">
          {images.map(
            (elem, index) =>
              elem.isActive && (
                <img
                  key={index}
                  className="w-40 md:w-48 lg:w-60 absolute rounded-lg -translate-x-[50%] -translate-y-[50%]"
                  src={elem.url}
                  style={{ top: elem.top, left: elem.left }}
                  alt=""
                />
              )
          )}
        </div>
      </div>
    </div>
  );
}

export default Work;
