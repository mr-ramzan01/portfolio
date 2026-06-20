import { experience } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { SectionFrame } from './SectionFrame';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <SectionFrame id="experience" label="02 / Experience">
      <div className={styles.head}>
        <h2 className={`display ${styles.heading}`}>
          Where
          <br />
          I&apos;ve worked.
        </h2>
        <p className={styles.kicker}>
          Two roles, one trajectory — from full-stack delivery to leading frontend on flagship products.
        </p>
      </div>

      <ol className={styles.list}>
        {experience.map((item) => (
          <ExperienceRow key={item.company} item={item} />
        ))}
      </ol>
    </SectionFrame>
  );
}

function ExperienceRow({ item }: { item: (typeof experience)[number] }) {
  const ref = useReveal<HTMLLIElement>();
  return (
    <li ref={ref} className={`${styles.row} reveal`}>
      <div className={styles.period}>{item.period}</div>
      <div className={styles.content}>
        <h3 className={`display ${styles.role}`}>{item.role}</h3>
        <p className={styles.companyLine}>
          <span className={styles.company}>{item.company}</span>
          <span className={styles.dot} aria-hidden="true">·</span>
          <span className={styles.location}>{item.location}</span>
        </p>
        <ul className={styles.bullets}>
          {item.bullets.map((b) => (
            <li key={b}>{b}</li>
          ))}
        </ul>
      </div>
    </li>
  );
}
