import React, { useState } from "react";
// import About from "../src/Components/About";
import About from "./components/About";
import Projects from "../src/components/Projects/";
import Resume from "../src/components/Resume";
import Contact from "../src/components/Contact";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";

function App() {
   const [sections] = useState(["About Me", "Projects", "Contact", "Resume"]);

   const [currentSection, setCurrentSection] = useState(sections[0]);
   return (
      <>
         <Header currentSection={currentSection} setCurrentSection={setCurrentSection} />

         <div>
            {currentSection === "About Me" && <About />}
            {currentSection === "Projects" && <Projects />}
            {currentSection === "Contact" && <Contact />}
            {currentSection === "Resume" && <Resume />}
         </div>
         <Footer />
      </>
   );
}

export default App;
