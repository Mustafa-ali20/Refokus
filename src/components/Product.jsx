import React from "react";
import Button from "./Button";

function Product({ val, mover, count }) {
  return (
    <div className="w-full py-8 lg:py-20 h-[23rem] text-white group relative">
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 relative z-10"
      >
        {/* Title */}
        <h1 className="text-3xl lg:text-6xl font-medium w-full lg:w-1/3">
          {val.title}
        </h1>

        {/* Description + Buttons */}
        <div className="details w-full lg:w-1/3">
          <p className="mb-6">{val.discription}</p>
          <div className="flex flex-wrap gap-5">
            {val.live && <Button title="Live Website" />}
            {val.case && <Button title="Case Study" />}
          </div>
          <hr className="border-t border-zinc-500 my-4 mt-6 " />
        </div>
      </div>

      {/* Background hover div (still active for hover effect) */}
      <div
        className={`h-[15rem] absolute top-12 inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-0 rounded-xl ${val.hoverClass}`}
      ></div>
    </div>
  );
}

export default Product;
