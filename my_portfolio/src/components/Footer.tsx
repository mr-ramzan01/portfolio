import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import styles from './Footer.module.css';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div className={styles.col}>
          <p className={`display ${styles.mark}`}>RK.</p>
          <p className={styles.copy}>
            © {year} {profile.name}. Designed &amp; built with care.
          </p>
        </div>

        <div className={styles.col}>
          <p className={styles.label}>Elsewhere</p>
          <ul className={styles.links}>
            <li><a href={profile.github} target="_blank" rel="noreferrer"><FiGithub size={14} /> GitHub</a></li>
            <li><a href={profile.linkedin} target="_blank" rel="noreferrer"><FiLinkedin size={14} /> LinkedIn</a></li>
            <li><a href={`mailto:${profile.email}`}><FiMail size={14} /> Email</a></li>
          </ul>
        </div>

        <a href="#top" className={`pill ${styles.back}`}>
          Back to top <FiArrowUp size={14} />
        </a>
      </div>
    </footer>
  );
}
