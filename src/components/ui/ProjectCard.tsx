import styles from "./ProjectCard.module.css";
import { projects } from "../data/projects";
import { useEffect, useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCard = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const myRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!myRef.current) return;

    const elements = document.querySelectorAll(`.${styles.container}`);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.show);
          } else {
            entry.target.classList.remove(styles.show);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );
    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className={styles.projectCardContainer}>
      {projects.map((project, index) => (
        <div
          ref={myRef}
          className={`${styles.container} ${
            index % 2 === 0 ? styles.left : styles.right
          }`}
          key={project.id}
        >
          <div className={styles.textContainer}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className={styles.techUsedContainer}>
              {project.techUsed.map((tech) => (
                <span key={tech} className={styles.techUsed}>
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
              Live Demo
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="tabler-icon tabler-icon-external-link"
              >
                <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"></path>
                <path d="M11 13l9 -9"></path>
                <path d="M15 4h5v5"></path>
              </svg>
            </a>
          </div>
          <div className={styles.projectImageContainer}>
            <Slider {...settings}>
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image[0]} alt="" />
                </a>
              </div>
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image[1]} alt="" />
                </a>
              </div>
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={project.image[2]} alt="" />
                </a>
              </div>
            </Slider>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
