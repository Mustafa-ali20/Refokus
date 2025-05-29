import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

function Card({
  width,
  start,
  para,
  hover,
  h31,
  h32,
  c1h1,
  c2h1,
  className,
  smAdjustments = "",
  mdAdjustments = "",
  mobileView = false,
}) {
  return (
    <div
      className={`
        ${width} min-h-[25rem] bg-zinc-800 rounded-xl text-white flex flex-col justify-between
        ${hover} transition-all duration-300 group
        ${className}
        sm:${smAdjustments}
        md:${mdAdjustments}
        p-5
      `}
    >
      <div className="w-full transition-all duration-300 group-hover:translate-x-1">
        <div className="group w-full flex justify-between items-center ">
          {h31 && <h3>Up Next: Culture</h3>}

          {/* Show 'Get in touch' only if not mobileView */}
          {!mobileView && h32 && <h3>Lets get in touch</h3>}
          {mobileView && h32 && <h3>Get in touch</h3>}

          <div className="transition-all duration-300 group-hover:-translate-x-2">
            <IoIosArrowRoundForward size={24} />
          </div>
        </div>

        {c1h1 && <h1 className="text-2xl font-medium mt-10">Who are we</h1>}

        {c2h1 && (
          <h1 className="text-2xl font-medium mt-10">
            {mobileView ? (
              // For mobile/tablet, single line without <br/>
              "Lets get to it, together."
            ) : (
              <>
                Lets get to it, <br /> together.
              </>
            )}
          </h1>
        )}
      </div>

      <div className="down w-full">
        {start && (
          <>
            <h1 className={`font-semibold tracking-tight leading-none ${mobileView ? "text-5xl" : "text-8xl"}`}>
              Start a Project
            </h1>
            <button className="px-5 py-2 border-1 flex items-center justify-center rounded-full mt-5 mb-1">
              Contact Us
            </button>
          </>
        )}

        {para && (
          <p className="font-medium text-zinc-500 text-sm ">
            Explore what drives our team.
          </p>
        )}
      </div>
    </div>
  );
}


export default Card;
