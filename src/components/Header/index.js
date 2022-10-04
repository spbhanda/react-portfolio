import React from "react";
import Nav from "../Nav";

function Header(props) {
   const { currentSection, setCurrentSection } = props;

   return (
      <header>
         <h1 className="header-title text-center">Shom Bhandari</h1>

         <Nav currentSection={currentSection} setCurrentSection={setCurrentSection} />
      </header>
   );
}

export default Header;
