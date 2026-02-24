import styles from './About.module.css'

const About = () => {
  return (
    <div className={styles.aboutContainer} id="about">
      <img src="/about.jpg" alt="" className={styles.aboutImage}/>
      <div className={styles.aboutText}>
        <h2 className={styles.aboutHeader}>About Me</h2>
        <p>A dedicated Front-End Developer based in Philadelphia, PA</p>
        <p>As a Front-End Developer with 7+ years of experience, I bring a strong foundation in HTML, CSS, JavaScript, React, Tailwind, and SCSS, along with a deep understanding of modern front-end architecture and performance optimization. I specialize in building scalable, maintainable applications and delivering polished, responsive user experiences. My work focuses on writing clean, efficient code, implementing best practices, and leveraging modern tooling to create high-performing interfaces.</p>
      </div>
    </div>
  )
}

export default About