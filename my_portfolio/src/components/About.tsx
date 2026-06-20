import { summary } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { SectionFrame } from './SectionFrame';
import styles from './About.module.css';

const toc = [
  { id: 'about', label: 'Introduction' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Project Portfolio' },
  { id: 'skills', label: 'Personal Skills' },
  { id: 'education', label: 'Education' },
  { id: 'contact', label: 'Contact' },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <SectionFrame id="about" label="01 / Introduction">
      <div ref={ref} className={`${styles.grid} reveal`}>
        <div className={styles.left}>
          <h2 className={`display ${styles.heading}`}>
            Table of
            <br />
            Contents
          </h2>
          <p className={styles.lead}>{summary}</p>
          <dl className={styles.stats}>
            <div>
              <dt>Interns mentored</dt>
              <dd>10+</dd>
            </div>
            <div>
              <dt>Products</dt>
              <dd>3 flagships</dd>
            </div>
            <div>
              <dt>Team led</dt>
              <dd>4 devs</dd>
            </div>
            <div>
              <dt>Load cut</dt>
              <dd>45%</dd>
            </div>
          </dl>
        </div>

        <ol className={styles.toc}>
          {toc.map((item, i) => (
            <li key={item.id}>
              <a href={`#${item.id}`} className={`pill ${styles.tocPill}`}>
                <span className={styles.tocIdx}>0{i + 1}</span>
                <span>{item.label}</span>
              </a>
            </li>
          ))}
        </ol>
      </div>
    </SectionFrame>
  );
}
