export default function SiteFooter() {
  return (
    <>
      <footer id="footer">
        <section className="split contact">
          <section className="alt">
            <h3>Location</h3>
            <p>España (Remote-Friendly)</p>
          </section>
          <section>
            <h3>Phone</h3>
            <p>
              <a href="tel:+34682295486">+34 682 29 54 86</a>
            </p>
          </section>
          <section>
            <h3>Email</h3>
            <p>
              <a href="mailto:celton.aret@gmail.com">celton.aret@gmail.com</a>
            </p>
          </section>
          <section>
            <h3>Social</h3>
            <ul className="icons alt">
              <li>
                <a href="https://linkedin.com/in/cristobalelton" className="icon brands alt fa-linkedin" target="_blank" rel="noopener">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/Zuus89" className="icon brands alt fa-github" target="_blank" rel="noopener">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </section>
          <section>
            <h3>CV</h3>
            <ul className="actions">
              <li>
                <a href="/resources/documents/Cristobal_Elton_CV.pdf" className="button icon solid fa-download" target="_blank" rel="noopener">
                  Download CV
                </a>
              </li>
            </ul>
          </section>
        </section>
      </footer>

      <div id="copyright">
        <ul>
          <li>&copy; Cristóbal Elton</li>
          <li>
            Design adapted from: <a href="https://html5up.net">HTML5 UP</a>
          </li>
        </ul>
      </div>
    </>
  );
}
