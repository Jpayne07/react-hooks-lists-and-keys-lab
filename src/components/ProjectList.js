import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  let newList = projects.map((project) => {
    return (<ProjectItem name = {project.name} key = {project.id} technologies = {project.technologies} about = {project.about}/>)
  })
  console.log(newList);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{newList}</div>
    </div>
  );
}

export default ProjectList;
