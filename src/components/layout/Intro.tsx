'use client';

interface IntroProps {
  show?: boolean;
}

export default function Intro({ show = true }: IntroProps) {
  if (!show) return null;

  return (
    <div id="intro">
      <h1>
        Cristóbal Elton<br />
        Data Portfolio
      </h1>
      <p>Data Analytics | Data Engineering | Power BI | SQL | Python</p>
      <ul className="actions">
        <li>
          <a href="#main" className="button icon solid solo fa-arrow-down scrolly">
            Explore
          </a>
        </li>
      </ul>
    </div>
  );
}
