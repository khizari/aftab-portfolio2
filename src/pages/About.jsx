import { useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import './About.css';

const facts = [
  { label: 'Location', val: 'Lahore, Pakistan' },
  { label: 'Focus', val: 'Frontend — React JS' },
  { label: 'Looking for', val: 'Internship' },
  { label: 'Available', val: 'Yes — when you approach me' },
];

const learning = [
  'Building this portfolio with React',
  'Practicing API calls with useEffect',
  'Reading about web accessibility',
];

function About() {
  const navigate = useNavigate();

  return (
    <div className="page-enter">
      <div className="about-wrap">

        {/* TOP INTRO */}
        <div className="about-intro">
          <div className="about-avatar">AA</div>
          <div className="about-text-block">
            <h2>I'm Aftab Ahmad,<br />a frontend developer.</h2>
            <p>Based in Lahore, Pakistan.</p>
          </div>
        </div>

        {/* STORY */}
        <div className="about-body">
          <p>
            I have completed my Frontend Development Course from BanoQabil, Lahore. I want to learn more and more to 
            become a successful developer.
          </p>
          <p>
            I started with HTML and CSS, then moved to JavaScript, and now I'm working
            seriously with <strong>React JS</strong>. I am a student of CS and want to build a career 
            in this field.
          </p>
          <p>
            My goal right now is simple: to work professionally as a <strong>frontend developer</strong>.
          </p>
        </div>

        {/* FACTS */}
        <div className="fact-list">
          {facts.map((fact) => (
            <div key={fact.label} className="fact-item">
              <span className="fact-label">{fact.label}</span>
              <span className="fact-val">{fact.val}</span>
            </div>
          ))}
        </div>

        {/* CURRENTLY LEARNING */}
        <div className="learning-box">
          <h4>what I'm working on right now</h4>
          {learning.map((item) => (
            <div key={item} className="learning-item">{item}</div>
          ))}
        </div>

        <div style={{ marginTop: '2rem', display: 'flex', gap: '0.75rem' }}>
          <button className="btn-dark" onClick={() => navigate('/contact')}>Get in touch →</button>
          <button className="btn-ghost" onClick={() => navigate('/projects')}>See my work</button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default About;