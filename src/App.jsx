import React from "react";
import Navbar from "./components/navbar.jsx";
import Hero from "./components/hero.jsx";
import Skills from "./components/skills.jsx";
import Projects from "./components/projects.jsx";
// import Contact from "./components/contact.jsx";
// import Footer from "./components/footer.jsx";

const App = () => {
  return (
    <div className="min-h-screen bg-primary dark:bg-primary-dark">
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      {/* <Contact /> */}
      {/* <Footer /> */}
    </div>
  );
};

export default App;
