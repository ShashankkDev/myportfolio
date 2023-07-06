import "./Projects.css"
import ProjectComponent from './ProjectComponent/ProjectComponent'

const Projects = () => {


  return (
    <div className='project-container'>
      <div className="project-heading">
        <h1>Projects</h1>
        <p>Each Project is a unique piece of development</p>
      </div>
      <div className="projects">
        <ProjectComponent />
      </div>
    </div>
  )
}

export default Projects
