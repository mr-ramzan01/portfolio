import { FiArrowUpRight } from 'react-icons/fi';
import { projects } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { SectionFrame } from './SectionFrame';
import styles from './Projects.module.css';

export function Projects() {
  return (
    <SectionFrame id="projects" label="03 / Project Portfolio">
      <div className={styles.head}>
        <h2 className={`display ${styles.heading}`}>
          Selected
          <br />
          Work.
        </h2>
        <p className={styles.kicker}>
          Three flagship products architected and shipped end-to-end at Wasserstoff —
          spanning AI search, regulatory intelligence, and event ticketing.
        </p>
      </div>

      <div className={styles.list}>
        {projects.map((project, idx) => (
          <ProjectCard key={project.name} project={project} index={idx} />
        ))}
      </div>
    </SectionFrame>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  const ref = useReveal<HTMLElement>();
  return (
    <article ref={ref} className={`${styles.card} reveal`}>
      <div className={styles.frame}>
        {project.image && (
          <img
            src={project.image}
            alt={`${project.name} preview`}
            loading="lazy"
            onError={(e) => {
              (e.currentTarget as HTMLImageElement).style.display = 'none';
            }}
          />
        )}
        <div className={styles.placeholder} aria-hidden="true" />
        <h3 className={`display ${styles.name}`}>{project.name}</h3>
        <span className={styles.idx}>0{index + 1} / 0{projects.length}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.subtitle}>
          <span className={styles.subtitleText}>{project.subtitle}</span>
          <span className={styles.sep} aria-hidden="true">·</span>
          <span className={styles.at}>@ {project.company}</span>
        </p>
        <ul className={styles.bullets}>
          {project.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
        <ul className={styles.tech}>
          {project.tech.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {project.link && (
          <a href={project.link} target="_blank" rel="noreferrer" className={`pill ${styles.linkPill}`}>
            Visit site <FiArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}
