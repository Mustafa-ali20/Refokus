import React from "react";
import Stripe from "./Stripe";

function Stripes() {
  const data = [
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/67461a791f752d7eb2b20280_Keystone-black.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg",
      number: 11,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg",
      number: 48,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg",
      number: 2,
    },
    {
      url: "https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b97202d2e093f2a48876a_goologo-onLight.svg",
      number: 11,
    },
  ];

  return (
    <div className="flex items-center flex-wrap mt-32">
      {data.map((elem, i) => (
        <Stripe val={elem} key={i} />
      ))}
    </div>
  );
}

export default Stripes;
