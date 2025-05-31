import React from "react";
import Navbar from "./components/Navbar";
import Button from "./components/Button";
import Work from "./components/Work";
import Stripes from "./components/Stripes";
import Products from "./components/Products";
import Marqes from "./components/Marqes";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import LocomotiveScroll from 'locomotive-scroll';


function App() {

const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 font-[Satoshi-Variable] overflow-x-hidden px-5 sm:px-5 md:px-5 lg:px-0">
      <Navbar />
      <Work />
      <Stripes />
      <Products />
      <Marqes />
      <Cards />
      <Footer />
    </div>
  );
}

export default App;
