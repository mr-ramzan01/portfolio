import { profile } from '../data/portfolio';
import { SectionFrame } from './SectionFrame';
import styles from './Hero.module.css';

export function Hero() {
  return (
    <SectionFrame id="top" label="RK · Senior Frontend Developer">
      <div className={styles.wrap}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} aria-hidden="true" /> Open to opportunities · New Delhi · Remote
        </p>

        <h1 className={`display ${styles.title}`}>
          <span className={styles.line}>
            <span className={styles.word}>RAM</span>
            <span className={styles.portraitInline} aria-hidden="true">
              <span className={styles.portrait}>
                <img
                  src="/Images/portrait.png"
                  alt=""
                  loading="eager"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = 'none';
                  }}
                />
              </span>
            </span>
            <span className={styles.word}>ZAN</span>
          </span>
          <span className={styles.line}>
            <span className={styles.word}>KHAN.</span>
          </span>
        </h1>

        <div className={styles.meta}>
          <p className={styles.role}>{profile.title}</p>
          <p className={styles.tagline}>{profile.tagline}</p>
        </div>

        <div className={styles.cta}>
          <a href="#about" className="pill solid">
            Explore portfolio
          </a>
          <a href="#contact" className="pill">
            Get in touch
          </a>
        </div>
      </div>
    </SectionFrame>
  );
}
