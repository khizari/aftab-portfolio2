import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

const links = [
  { to: '/', label: 'home' },
  { to: '/about', label: 'about' },
  { to: '/projects', label: 'projects' },
  { to: '/contact', label: 'contact' },
];

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="navbar">
      <div className="nav-name" onClick={() => navigate('/')}>
        Aftab Ahmad<span className="nav-dot">.</span>
      </div>
      
      <div className="nav-links">
        {links.map((link) => (
          <NavLink
            key={link.to}
            to={link.to}
            end={link.to === '/'}
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            {link.label}
          </NavLink>
        ))}
      </div>
      
      <div className="nav-status">
        <span className="dot-green" />
        open to work
      </div>
    </nav>
  );
}

export default Navbar;