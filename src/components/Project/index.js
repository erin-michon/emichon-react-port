import React from 'react';
import passGenApp from "../../assets/images/passGenApp.gif"


function Project(props) {
  const currentProject = {
    title: "password generator",
    deployed: "https://erin-michon.github.io/password-generator/",
    github: "https://github.com/erin-michon/password-generator"
  }
  return (
    <section>
      <div className="flex-row">
        <img src={passGenApp} alt="a gif of the password generator accepting criteria from user and providing a generated password"></img>
      </div>
      <h1>{currentProject.title}</h1>
      <a href={currentProject.deployed}>Deployed Application</a>
      <a href={currentProject.github}>GitHub Repository</a>
    </section>
  );
}

export default Project;