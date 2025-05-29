import React from "react";
import Button from "./Button";

function Navbar() {
  return (
    <>
      <div className="fixed top-0 left-0 w-full z-50 bg-zinc-900/20 backdrop-blur-sm">
        <div className="max-w-screen-xl mx-auto py-1 flex items-center justify-between border-b-[1px] border-zinc-700 px-4">
          <div className="nleft flex items-center">
            <img
              className="w-28 md:w-32 lg:w-40"
              src={`${import.meta.env.BASE_URL}images/refokus.png`}
              alt=""
            />
            {/* Show links on all screens with smaller text on mobile */}
            <div className="flex links text-white gap-3 md:gap-6 lg:gap-14 ml-4 md:ml-8 lg:ml-20 text-xs md:text-sm lg:text-base">
              {["Home", "Work", "Culture", "News"].map((elem, i) => (
                <React.Fragment key={i}>
                  <a className="flex items-center gap-1.5" href="#">
                    {i === 1 && (
                      <span
                        style={{ boxShadow: "0 0 0.5em #00FF19" }}
                        className="inline-block w-1.5 h-1.5 bg-green-500 rounded-full"
                      ></span>
                    )}
                    {elem}
                  </a>
                  {i === 2 && (
                    <span className="bg-zinc-500 w-[2px] h-6 inline-block"></span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
          {/* Hide button on mobile, show on larger screens */}
          <div className="hidden md:block w-[17%]">
            <Button />
          </div>
          {/* Mobile menu button */}
          <button className="md:hidden text-white">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
