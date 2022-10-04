import React, { useState } from "react";
import About from "../src/Components/About";
import Projects from "../src/Components/Projects";
import Resume from "../src/Components/Resume";
import Contact from "../src/Components/Contact";
import Header from "../src/Components/Header";
import Footer from "../src/Components/Footer";

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
