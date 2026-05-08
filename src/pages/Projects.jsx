import Footer from '../components/Footer';
import './Projects.css';

const projects = [
  {
    num: '01',
    emoji: '🛒',
    name: 'E-Commerce UI',
    desc: 'My first big React project. Built a full shopping UI — product cards, cart logic, and checkout steps. Learned a lot about component structure and props here.',
    stack: 'react + css + javascript',
    tags: [{ label: 'React', cls: 't-react' }, { label: 'CSS3', cls: 't-css' }, { label: 'JavaScript', cls: 't-js' }],
  },
  {
    num: '02',
    emoji: '✅',
    name: 'Todo App',
    desc: 'Simple but where I really got useState. Added local storage so tasks survive a page refresh. Has filters too — all, active, completed.',
    stack: 'react + javascript',
    tags: [{ label: 'React', cls: 't-react' }, { label: 'useState', cls: 't-js' }],
  },
  {
    num: '03',
    emoji: '🌦️',
    name: 'Weather App',
    desc: 'This one taught me useEffect and API calls properly. OpenWeather API, city search, °C/°F toggle. Took longer than expected but I am proud of it.',
    stack: 'api + react',
    tags: [{ label: 'OpenWeather API', cls: 't-api' }, { label: 'React', cls: 't-react' }],
  },
  {
    num: '04',
    emoji: '🧮',
    name: 'Calculator App',
    desc: 'Built this in JS before touching React. Operator chaining was trickier than I expected. Keyboard support added later.',
    stack: 'javascript + css',
    tags: [{ label: 'JavaScript', cls: 't-js' }, { label: 'CSS3', cls: 't-css' }],
  },
  {
    num: '05',
    emoji: '🎬',
    name: 'Movie Search App',
    desc: 'TMDB API integration. Search movies, see ratings and posters. Learned how to manage and display dynamic movie lists from a backend.',
    stack: 'api + react',
    tags: [{ label: 'API', cls: 't-api' }, { label: 'React', cls: 't-react' }],
  },
  {
    num: '06',
    emoji: '📝',
    name: 'This Portfolio',
    desc: "You're looking at it. Multi-page React app with React Router. Wanted it to feel personal, not like a template.",
    stack: 'react  + css',
    tags: [{ label: 'React', cls: 't-react' }, { label: 'React Router', cls: 't-js' }, { label: 'CSS', cls: 't-css' }],
  },
];

function Projects() {
  return (
    <div className="page-enter">
      <div className="projects-wrap">
        <h2 className="section-heading">projects</h2>
        <p className="projects-intro">
          Things I've built while learning. Each one taught me something different —
          some went smooth, some were frustrating, all were worth it.
        </p>

        <div className="proj-full-grid">
          {projects.map((project) => (
            <div key={project.num} className="proj-full-card">
              <div className="proj-thumb-area">
                <span className="proj-emoji">{project.emoji}</span>
                <span className="proj-stack-label">{project.stack}</span>
              </div>
              <div className="proj-card-body">
                <div className="proj-num">{project.num}</div>
                <div className="proj-name">{project.name}</div>
                <p className="proj-desc">{project.desc}</p>
                <div className="proj-stack">
                  {project.tags.map((tag) => (
                    <span key={tag.label} className={`proj-tag ${tag.cls}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Projects;