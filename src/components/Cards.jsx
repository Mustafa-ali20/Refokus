import React from "react";
import Card from "./Card";

function Cards() {
  return (
    <div className="w-full">
      <div className="max-w-screen-xl mx-auto py-20 flex gap-2 flex-col lg:flex-row">
        <Card
          width={"basis-1/3"}
          c1h1={true}
          h31={true}
          start={false}
          para={true}
          hover="hover:bg-[#46289A]"
          className="hidden lg:block"
        />
        <Card
          width={"basis-2/3"}
          c2h1={true}
          h32={true}
          start={true}
          para={false}
          hover="hover:bg-[#7542FF]"
          className="block"
          mobileView={true}
        />
      </div>
    </div>
  );
}

export default Cards;
