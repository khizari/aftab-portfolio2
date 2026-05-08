import { useState } from 'react';
import Footer from '../components/Footer';
import './Contact.css';

const methods = [
  { label: 'email', val: 'aftab@google.com' },
  { label: 'location', val: 'Lahore, Pakistan' },
  { label: 'github', val: 'github.com/aftab-ahmad' },
  { label: 'linkedin', val: 'linkedin.com/in/aftab-ahmad' },
];

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sent, setSent] = useState(false);

  const submit = () => {
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setName('');
      setEmail('');
      setMessage('');
    }, 3000);
  };

  return (
    <div className="page-enter">
      <div className="contact-wrap">

        <div className="contact-intro">
          <h2>Let's talk.</h2>
          <p>
            Approach me when you need. Any Question? Just message me, I will 
            response when available.
          </p>
        </div>

        <div className="contact-methods">
          {methods.map((method) => (
            <div key={method.label} className="contact-method">
              <div className="cm-label">{method.label}</div>
              <div className="cm-val">{method.val}</div>
            </div>
          ))}
        </div>

        <div className="form-box">
          <div className="field">
            <label>name</label>
            <input 
              type="text" 
              placeholder="Your name" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
            />
          </div>
          
          <div className="field">
            <label>email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          
          <div className="field">
            <label>message</label>
            <textarea 
              placeholder="What's on your mind?" 
              value={message} 
              onChange={(e) => setMessage(e.target.value)} 
            />
          </div>
          
          <button className={sent ? 'send-btn ok' : 'send-btn'} onClick={submit}>
            {sent ? 'Sent ✓' : 'Send message'}
          </button>
        </div>

      </div>
      <Footer />
    </div>
  );
}

export default Contact;