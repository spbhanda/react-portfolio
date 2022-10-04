import React from "react";
import myPhoto from "./Images/myPhoto.JPG";

function About() {
   return (
      <section>
         <h1 id="about">About Me</h1>
         <div className="About">
            <div>
               <img id="photo" src={myPhoto} alt="myPhoto" />
            </div>
            <div>
               <p className="About-Text">
                  I am a structual analysis engineer. I have worked on various boeing airplane programs. I wanted to
                  switch my career to computer programming.
               </p>
            </div>
         </div>
         <div className="icons"></div>
      </section>
   );
}

export default About;
