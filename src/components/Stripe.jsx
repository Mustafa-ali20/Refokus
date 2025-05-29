import React from "react";

// function Stripe({ val }) {
//   return (
//     <div className="w-[16.66%] h-[7.5vh] px-4 py-5 border-t-[1.2px] border-r-[1.2px] border-b-[1.2px] mt-32 border-zinc-800 flex justify-between items-center bg-white ">
//       <img src={val.url} alt="" />
//       <span className="text-xl mr-2 font-semibold">{val.number}</span>
//     </div>
//   );
// }


function Stripe({ val }) {
  return (
    <div className="w-1/3 lg:w-1/6 h-[7.5vh] px-4 py-5 border border-zinc-800 flex justify-between items-center bg-white">
       <img src={val.url} alt="" className="w-25 object-contain" />
      <span className="text-xl mr-2 font-semibold hidden sm:block">{val.number}</span>
    </div>
  );
}


export default Stripe;
