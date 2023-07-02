import { useParams } from 'react-router-dom'
import { projects } from '../helpers/projectList'
import BtnGitHub from '../components/BtnGitHub/BtnGitHub'

const Project = () => {
  // достаем параметры из Route
  const { id } = useParams()
  console.log(id)
  const project = projects[id]
  return (
    <main className="section">
      <div className="container">
        <div className="project-details">
          <h1 className="title-1">{project.title}</h1>

          <img className="project-details__cover" alt={project.title} src={project.img} />

          <div className="project-details__desc">
            <p>Skills: {project.skills}</p>
          </div>
          {project.gitHubLink && <BtnGitHub link="https://github.com/" />}
        </div>
      </div>
    </main>
  )
}

export default Project
