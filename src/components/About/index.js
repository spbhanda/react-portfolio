import React from "react";
import coverImage from "../../assets/cover/myPhoto.JPG";
function About() {
   return (
      <section className="my-5">
         <h1 id="about">About Me</h1>
         <img src={coverImage} className="my-2" style={{ width: "20%" }} alt="cover" />
         <div className="my-2">
            <p>
               I am a structural analysis engineer. I have had fortune to work on some amazing historic aircrafts and
               some other projects. I have been a part of Boeing 787-8 for about 3 years mainly working on creating a
               digital part illustration and sometimes crating 3D components for suppliers data so they can be accessed
               as an individual parts so it can be ordered or fixed whichever needed. My biggest proud as an design
               engineer was works I have done on on 777X. I was responsible for working on 3 flap support fairings
               metalic structures and the all 4 outboard fairing tailcones. I feel personally connected to 777X. I know
               there were a lot sweets and tear went into making this amazing product, and a lot of people who were
               involved into making it are watiting see the finish line of its phase of approval.
            </p>
         </div>
      </section>
   );
}

export default About;
