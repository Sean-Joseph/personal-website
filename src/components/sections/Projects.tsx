import styles from './Projects.module.css'
import ProjectCard from '../ui/ProjectCard';

const Projects = () => {
  return (
    <div className={styles.projectsContainer} id="projects">
      <div className={styles.projectContent}>
        <h2 className={styles.projectsHeader}>Projects</h2>
        <h3>Some things I've built</h3>
      </div>
        <ProjectCard/>
    </div>
  )
}

export default Projects