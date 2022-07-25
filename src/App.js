import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";

import Navbar from "./components/Navbar";
import Portoflio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";

function App() {
  return (
    <div>
      {/* <h1 className="text-4xl font-bold font-signature">Yash Deharia</h1> */}

      <Navbar />
      <Home />
      <About />
      <Portoflio />
      <Experience />
      <Contact />

      <SocialLinks />


    </div>
  );
}

export default App;
