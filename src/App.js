import React from "react";
import Navbar from "./components/navbar/Navbar";
import Banner from "./components/banner/Banner";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <div className="w-full bg-bodyColor text-lightText px-4">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-16">
        <Banner />
        <Resume />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

export default App;
