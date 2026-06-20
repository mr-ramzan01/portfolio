import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FiArrowUpRight, FiGithub, FiLinkedin, FiMail, FiMapPin, FiPhone } from 'react-icons/fi';
import { profile } from '../data/portfolio';
import { useReveal } from '../hooks/useReveal';
import { SectionFrame } from './SectionFrame';
import styles from './Contact.module.css';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>('idle');
  const ref = useReveal<HTMLDivElement>();

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus('sending');
    emailjs
      .sendForm('service_bgqmuf2', 'template_ovsuet7', formRef.current, 'I1ARv7okO2t6BnGBr')
      .then(() => {
        setStatus('sent');
        formRef.current?.reset();
        setTimeout(() => setStatus('idle'), 4000);
      })
      .catch(() => {
        setStatus('error');
        setTimeout(() => setStatus('idle'), 4000);
      });
  };

  return (
    <SectionFrame id="contact" label="06 / Contact">
      <div className={styles.head}>
        <h2 className={`display ${styles.heading}`}>
          Let&apos;s build
          <br />
          something good.
        </h2>
        <p className={styles.kicker}>
          Available for senior frontend roles, freelance product work, and frontend-architecture consulting.
        </p>
      </div>

      <div ref={ref} className={`${styles.grid} reveal`}>
        <div className={styles.intro}>
          <ul className={styles.details}>
            <li>
              <FiPhone size={16} />
              <a href={`tel:${profile.phoneTel}`}>{profile.phone}</a>
            </li>
            <li>
              <FiMail size={16} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <FiMapPin size={16} />
              <span>{profile.location}</span>
            </li>
            <li>
              <FiGithub size={16} />
              <a href={profile.github} target="_blank" rel="noreferrer">
                {profile.githubHandle} <FiArrowUpRight size={12} />
              </a>
            </li>
            <li>
              <FiLinkedin size={16} />
              <a href={profile.linkedin} target="_blank" rel="noreferrer">
                {profile.linkedinHandle} <FiArrowUpRight size={12} />
              </a>
            </li>
          </ul>
        </div>

        <form ref={formRef} onSubmit={sendEmail} className={styles.form} noValidate>
          <label className={styles.field}>
            <span className={styles.label}>Name</span>
            <input type="text" name="from_name" required autoComplete="name" />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Email</span>
            <input type="email" name="email_id" required autoComplete="email" />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Phone</span>
            <input type="tel" name="mobile_no" autoComplete="tel" />
          </label>
          <label className={styles.field}>
            <span className={styles.label}>Message</span>
            <textarea name="message" rows={5} required />
          </label>
          <button type="submit" className={`pill solid ${styles.submit}`} disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : status === 'sent' ? 'Sent ✓' : 'Send message'}
            {status === 'idle' && <FiArrowUpRight size={14} />}
          </button>
          {status === 'error' && (
            <p className={styles.errorMsg}>Something went wrong. Email me directly instead.</p>
          )}
        </form>
      </div>
    </SectionFrame>
  );
}
