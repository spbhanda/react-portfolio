import React, { useState } from "react";
import Modal from "../Modal";

import runbuddy from "./Images/01-run-buddy.JPG";
import generate_password from "./Images/03-generate-password.JPG";
import note_taker from "./Images/04-note-taker.JPG";
import weather from "./Images/05-weather_dashboard.JPG";
import horro_scorer from "./Images/06_horror_scorer.JPG";

const Projects = ({ category }) => {
   const [isModalOpen, setIsModalOpen] = useState(false);
   const [setCurrentProject] = useState();

   const [photos] = useState([
      {
         name: "Run Buddy",
         image_path: runbuddy,
         project: category,
         description: "The application is raw website for signing-up for workout company",
         link: "https://spbhanda.github.io/runBuddy/",
         githublink: "https://github.com/spbhanda/runBuddy",
      },
      {
         name: "Passwork Generator",
         image_path: generate_password,
         project: category,
         description: "This application generates a random password",
         link: "https://spbhanda.github.io/generatePassword/",
         githublink: "https://github.com/spbhanda/generatePassword",
      },
      {
         name: "Note Taker",
         image_path: note_taker,
         project: category,
         description: "This application is for taking note and storing it on the disc",
         link: "https://powerful-oasis-82585.herokuapp.com/",
         githublink: "https://github.com/spbhanda/NoteTaker",
      },

      {
         name: "Weather Dashboard",
         image_path: weather,
         project: category,
         description: "This application show the 5 days weather for the selected city",
         link: "https://spbhanda.github.io/weatherDashboard/",
         githublink: "https://github.com/spbhanda/weatherDashboard",
      },

      {
         name: "Horror Scorer",
         image_path: horro_scorer,
         project: category,
         description: "This app is a horror movie blog",
         link: "https://horror-scorer.herokuapp.com/",
         githublink: "https://github.com/Zaphod1977/Horror_Scorer",
      },
   ]);

   const currentProjects = photos.filter((photo) => photo.category === category);

   const toggleModal = (image, i) => {
      setCurrentProject({ ...image, index: i });
      setIsModalOpen(!isModalOpen);
   };

   return (
      <div className="port">
         {isModalOpen && <Modal onClose={toggleModal} currentProjects={currentProjects} />}
         <div className="flex-row">
            {currentProjects.map((image, i) => (
               //make image a link
               <a href={image.link} key={image.name}>
                  <img
                     alt={image.name}
                     className="img-thumbnail mx-1"
                     src={image.image_path}
                     onClick={() => toggleModal(image, i)}
                  />
               </a>
            ))}
         </div>
      </div>
   );
};
export default Projects;
