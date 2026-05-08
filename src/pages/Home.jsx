import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './Home.css';

const skills = ['React JS', 'JavaScript', 'HTML5', 'CSS3', 'GitHub'];

const featured = [
  {
    num: '01',
    name: 'E-Commerce UI',
    desc: 'Shopping interface with cart, product listing, and checkout — my first big React project.',
    tags: [{ label: 'React', cls: 't-react' }, { label: 'CSS', cls: 't-css' }],
  },
  {
    num: '02',
    name: 'Weather App',
    desc: 'Learned API calls building this. Real-time data, city search, degree toggle.',
    tags: [{ label: 'API', cls: 't-api' }, { label: 'React', cls: 't-react' }],
  },
  {
    num: '03',
    name: 'Todo App',
    desc: 'Classic but useful — useState, filters, local storage. Clean and functional.',
    tags: [{ label: 'React', cls: 't-react' }, { label: 'Hooks', cls: 't-js' }],
  },
];

function Home() {
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      <div className="home-wrap">

        {/* INTRO */}
        <p className="intro-tag">Frontend developer · Lahore, Pakistan</p>
        <h1>Hi, I'm Aftab —<br /><em>I build things</em> for the web.</h1>
        <p className="tagline">
          I'm a passionate learner and <strong>React developer</strong> who loves turning rough
          ideas into clean, working interfaces. Still learning every day — and enjoying
          the process.
        </p>
        
        <div className="home-btns">
          <button className="btn-dark" onClick={() => navigate('/projects')}>See my projects →</button>
          <button className="btn-ghost" onClick={() => navigate('/contact')}>Say hello</button>
        </div>

        {/* STATUS BAR */}
        <div className="currently">
          <div>
            <div className="c-label">currently learning</div>
            <div className="c-val">React JS &amp; REST APIs</div>
          </div>
          <div>
            <div className="c-label">building</div>
            <div className="c-val">This portfolio + side projects</div>
          </div>
          <div>
            <div className="c-label">goal</div>
            <div className="c-val">Junior frontend role</div>
          </div>
        </div>

        {/* SKILLS */}
        <h2 className="section-heading">skills</h2>
        <div className="skills-row">
          {skills.map((skill) => (
            <span key={skill} className="skill-pill main">
              {skill}
            </span>
          ))}
        </div>

        {/* FEATURED PROJECTS */}
        <h2 className="section-heading" style={{ marginTop: '3rem' }}>a few things i've built</h2>
        <div className="feat-grid">
          {featured.map((project) => (
            <div key={project.num} className="feat-card" onClick={() => navigate('/projects')}>
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
          ))}
        </div>
        
        <button className="btn-ghost" style={{ marginTop: '0.25rem' }} onClick={() => navigate('/projects')}>
          View all projects →
        </button>

      </div>
      <Footer />
    </div>
  );
}

export default Home;