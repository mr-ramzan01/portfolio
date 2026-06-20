import { skills } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { SectionFrame } from './SectionFrame';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <SectionFrame id="skills" label="04 / Personal Skills">
      <div className={styles.head}>
        <h2 className={`display ${styles.heading}`}>
          Personal
          <br />
          Skills.
        </h2>
        <p className={styles.kicker}>
          The stack I reach for daily — sharpened across legal, regulatory and event-tech production work.
        </p>
      </div>

      <div className={styles.grid}>
        {skills.map((group) => (
          <SkillGroupCard key={group.label} group={group} />
        ))}
      </div>
    </SectionFrame>
  );
}

function SkillGroupCard({ group }: { group: (typeof skills)[number] }) {
  const ref = useReveal<HTMLDivElement>();
  return (
    <div ref={ref} className={`${styles.group} reveal`}>
      <h3 className={styles.label}>{group.label}</h3>
      <ul className={styles.items}>
        {group.items.map((item) => (
          <li key={item} className={`pill ${styles.pill}`}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
