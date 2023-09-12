import React from 'react'
import projects from '@/projectData'
import Project from './Project'

const Portfolio = () => {
  return (
    <section>
      <div>
        <h3 className="text-5xl font-bold py-1 dark:text-white text-center m-auto text-purple-500">
          Portfolio
        </h3>
        <p className="py-2 text-center dark:text-white">
          An ever-growing list of the projects I have created and worked on
        </p>
      </div>
      <div className="flex flex-wrap">
        {projects.map((project) => (
          <div key={project.name} className="mx-auto">
            <Project
              name={project.name}
              image={project.image}
              description={project.description}
              projectLink={project.projectLink}
              githubLink={project.githubLink}
              technologies={project.technologies}
            />
          </div>
        ))}
      </div>
    </section>
  )
}
export default Portfolio
