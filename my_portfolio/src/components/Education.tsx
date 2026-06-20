import { certifications, education } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { SectionFrame } from './SectionFrame';
import styles from './Education.module.css';

export function Education() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <SectionFrame id="education" label="05 / Education & Certifications">
      <div className={styles.head}>
        <h2 className={`display ${styles.heading}`}>
          Where
          <br />
          I learnt.
        </h2>
        <p className={styles.kicker}>
          A foundation built through intensive full-stack training, refined day-to-day in production.
        </p>
      </div>

      <div ref={ref} className={`${styles.grid} reveal`}>
        <div className={styles.column}>
          <h3 className={styles.colTitle}>Education</h3>
          {education.map((item) => (
            <article key={item.institution} className={styles.item}>
              <p className={styles.period}>{item.period}</p>
              <h4 className={`display ${styles.title}`}>{item.qualification}</h4>
              <p className={styles.institution}>{item.institution}</p>
              {item.detail && <p className={styles.detail}>{item.detail}</p>}
            </article>
          ))}
        </div>

        <div className={styles.column}>
          <h3 className={styles.colTitle}>Certifications</h3>
          {certifications.map((item) => (
            <article key={item.institution} className={styles.item}>
              <p className={styles.period}>{item.period}</p>
              <h4 className={`display ${styles.title}`}>{item.qualification}</h4>
              <p className={styles.institution}>{item.institution}</p>
              {item.detail && <p className={styles.detail}>{item.detail}</p>}
            </article>
          ))}
        </div>
      </div>
    </SectionFrame>
  );
}
