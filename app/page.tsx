const products = [
  {
    number: "01",
    title: "Amygdala",
    category: "Mental wellness web app",
    description:
      "A focused anxiety-support companion with grounding exercises, guided breathing, thought organization, personalized coping tools, and trusted emergency contacts.",
    tags: ["JavaScript", "Firebase", "Responsive UI"],
    accent: "pink",
    status: "Web App Available",
    statusClass: "available",
    url: "https://cpriss1979.github.io/amygdala.io/",
    action: "Open Amygdala",
  },
  {
    number: "02",
    title: "Three Sides",
    category: "Wellness companion",
    description:
      "A supportive self-care experience combining mood journaling, customizable themes, coping tools, and a virtual pet that turns healthy habits into visible progress.",
    tags: ["Web App", "UX Design", "Local Storage"],
    accent: "blue",
    status: "Available on Google Play",
    statusClass: "available",
    url: "https://play.google.com/store/apps/details?id=io.github.cpriss1979.twa&hl=en_US",
    action: "View on Google Play",
  },
  {
    number: "03",
    title: "Wonderlings",
    category: "Cozy exploration game",
    description:
      "A peaceful, non-violent nature experience where players restore an abandoned meadow, discover animals, grow gardens, and uncover quiet surprises.",
    tags: ["Unreal Engine 5", "World Building", "Game Design"],
    accent: "violet",
    status: "In Development",
    statusClass: "development",
    url: "",
    action: "",
  },
];

const skills = [
  "HTML & CSS",
  "JavaScript",
  "Firebase",
  "WordPress",
  "Responsive Design",
  "UX Writing",
  "Unreal Engine 5",
  "GitHub",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Glow Code Studio home">
          <img src="/assets/glowcode-horizontal.jpeg" alt="GlowCode Studio" />
        </a>
        <nav aria-label="Main navigation">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a className="nav-contact" href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero" id="top">
        <div className="hero-copy">
          <p className="eyebrow">Independent Digital Studio</p>
          <h1>
            Beautiful software<br />that <span>glows.</span>
          </h1>
          <p className="hero-text">
            Thoughtful wellness apps and interactive experiences built
            with care, curiosity, and a little bit of magic.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#work">View My Work</a>
            <a className="text-link" href="#about">About the Studio <span>↘</span></a>
          </div>
        </div>
        <div className="hero-art" aria-hidden="true">
          <div className="orb"><div className="orb-core" /></div>
          <div className="wave wave-one" />
          <div className="wave wave-two" />
          <div className="wave wave-three" />
        </div>
        <div className="scroll-note"><span /> Scroll to explore</div>
      </section>

      <section className="project-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Selected Work</p>
            <h2>Projects built with purpose.</h2>
          </div>
          <p>Original products shaped around real people, meaningful needs, and thoughtful details.</p>
        </div>

        <div className="project-list">
          {products.map((project) => (
            <article className={`project project-${project.accent}`} key={project.title}>
              <div className="project-number">{project.number}</div>
              <div className="project-main">
                <div className="project-meta">
                  <p className="project-category">{project.category}</p>
                  <span className={`project-status ${project.statusClass}`}>{project.status}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                {project.url && (
                  <a className="project-link" href={project.url} target="_blank" rel="noreferrer">
                    {project.action} <span>↗</span>
                  </a>
                )}
              </div>
              <div className={`product-logo product-logo-${project.number}`} aria-label={`${project.title} logo`}>
                {project.title === "Amygdala" && <><span className="brain-mark">A</span><strong>AMYGDALA</strong></>}
                {project.title === "Three Sides" && <><span className="sides-mark"><i /><i /><i /></span><strong>THREE SIDES</strong></>}
                {project.title === "Wonderlings" && <><span className="stars">✦ · ✧</span><strong>Wonderlings</strong><em>Explore. Restore. Discover.</em></>}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="web-experiments" aria-labelledby="web-projects-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow">More to Explore</p>
            <h2 id="web-projects-title">Moments worth counting down to.</h2>
          </div>
          <p>Personal celebrations and cosmic encounters, brought to life on the web.</p>
        </div>
        <div className="web-project-grid">
          <article className="web-project wedding-project">
            <div className="web-project-art wedding-art" aria-hidden="true"><span>B <i>&amp;</i> B</span><small>A celebration of love</small></div>
            <div className="web-project-copy">
              <p className="project-category">Wedding Website</p>
              <h3>Brenton &amp; Bre</h3>
              <p>A personal wedding countdown celebrating Brenton and Bre and the anticipation of their special day.</p>
              <div className="tags"><span>Event Website</span><span>Countdown</span></div>
              <a className="project-link" href="https://cpriss1979.github.io/Brenton_Bre_Wedding.io/" target="_blank" rel="noreferrer">Visit wedding website <span>↗</span></a>
            </div>
          </article>
          <article className="web-project apophis-project">
            <div className="web-project-art apophis-art" aria-hidden="true"><span className="asteroid-mark" /><span>APOPHIS</span><small>The 2029 encounter</small></div>
            <div className="web-project-copy">
              <p className="project-category">Space Countdown</p>
              <h3>Apophis</h3>
              <p>An atmospheric countdown to asteroid Apophis’s 2029 Earth encounter, turning a celestial event into an interactive experience.</p>
              <div className="tags"><span>Interactive Web</span><span>Countdown</span></div>
              <a className="project-link" href="https://cpriss1979.github.io/apophis.io/" target="_blank" rel="noreferrer">Explore Apophis <span>↗</span></a>
            </div>
          </article>
        </div>
      </section>

      <section className="client-work" aria-labelledby="client-work-title">
        <div className="client-heading">
          <p className="eyebrow">Selected Website Work</p>
          <h2 id="client-work-title">A little client work, too.</h2>
        </div>
        <div className="client-grid">
          <article>
            <span>WordPress · Church Website</span>
            <h3>Harvest Christian Center</h3>
            <p>A welcoming, easy-to-navigate website created to bring beliefs, service information, sermons, giving, and church resources together in one accessible place.</p>
            <a href="https://www.harvestexperience.org/" target="_blank" rel="noreferrer">Visit website ↗</a>
          </article>
          <article>
            <span>WordPress · Past Client Project</span>
            <h3>Viki Scherer</h3>
            <p>Designed and built a WordPress website for author and speaker Viki Scherer, showcasing her speaking services, products, and testimonials. The website has since been retired.</p>
          </article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="about-title">
          <p className="eyebrow">About Glow Code</p>
          <h2>Technology should feel human.</h2>
        </div>
        <div className="about-copy">
          <p className="lead">Glow Code Studio is the independent creative practice of Crystal Roberts—a developer, designer, and persistent problem-solver.</p>
          <p>I create digital experiences that are welcoming, useful, and easy to understand. My work moves between wellness applications, client websites, and imaginative interactive worlds, but the goal stays the same: build something meaningful and make it feel beautiful.</p>
          <div className="volunteer-experience">
            <p className="eyebrow">Community &amp; Service</p>
            <h3>Volunteer IT</h3>
            <p className="volunteer-meta">Harvest Christian Center <span>2026–present</span></p>
          </div>
        </div>
      </section>

      <section className="skills" id="skills">
        <div>
          <p className="eyebrow">Tools & Capabilities</p>
          <h2>Ideas, design, and code—connected.</h2>
        </div>
        <div className="skill-cloud">
          {skills.map((skill) => <span key={skill}>{skill}</span>)}
        </div>
      </section>

      <section className="contact" id="contact">
        <p className="eyebrow">Let&apos;s Create Something</p>
        <h2>Have an idea that deserves to glow?</h2>
        <p>I&apos;m open to thoughtful projects, creative collaborations, and new opportunities.</p>
        <div className="contact-actions">
          <a className="button button-primary" href="mailto:glowcodestudio@gmail.com">Email Me <span>↗</span></a>
          <a className="button button-secondary" href="https://github.com/cpriss1979" target="_blank" rel="noreferrer">View GitHub <span>↗</span></a>
        </div>
      </section>

      <footer>
        <img src="/assets/glowcode-horizontal.jpeg" alt="GlowCode Studio" />
        <a href="https://glowcodestudio.com" target="_blank" rel="noreferrer">glowcodestudio.com</a>
        <p>Designed and built with care.</p>
        <a href="#top">Back to top ↑</a>
      </footer>
    </main>
  );
}
