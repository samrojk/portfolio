import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
// import Skills from "./components/skills.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-primary dark:bg-primary-dark">
      <Navbar />
      <Hero />
      {/* <Skills /> */}
    </div>
  );
};

export default App;
