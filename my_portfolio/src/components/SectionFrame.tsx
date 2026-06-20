import { ReactNode } from 'react';
import { profile } from '../data/portfolio';

interface Props {
  id: string;
  label: string;
  children: ReactNode;
}

export function SectionFrame({ id, label, children }: Props) {
  return (
    <section id={id} className="page">
      <div className="pageInner">
        <header className="pageTop">
          <span className="label">{label}</span>
          <svg
            className="longArrow"
            viewBox="0 0 320 12"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <line x1="0" y1="6" x2="312" y2="6" stroke="currentColor" strokeWidth="1" />
            <polyline
              points="304,1 314,6 304,11"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="square"
              strokeLinejoin="miter"
            />
          </svg>
        </header>

        <div className="pageBody">{children}</div>

        <footer className="pageBottom">
          <span>{profile.name}</span>
          <span>{profile.linkedin.replace('https://www.', '').replace('https://', '')}</span>
        </footer>
      </div>
    </section>
  );
}
