import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import WhatIDo from "./components/WhatIDo/WhatIDo";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-xl mx-auto px-16">
        <Navbar />
        <Banner />
        <WhatIDo />
      </div>
    </div>
  );
}

export default App;
