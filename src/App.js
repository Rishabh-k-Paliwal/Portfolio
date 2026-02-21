import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  ChevronDown,
  ChevronUp,
  Video,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers,
  Terminal,
  Award,
  GraduationCap,
  X
} from 'lucide-react';
import './styles.css';

// Data Files
const projectsData = [
  {
    id: 2,
    title: "AstroAryabhatta",
    shortDesc: "Full-stack consultation booking platform with real-time availability, secure payments, and multilingual UX.",
    techStack: ["React", "Node.js", "MongoDB", "Razorpay", "i18next", "JWT"],
    github: "https://github.com/Rishabh-k-Paliwal",
    live: "https://astro-aryabhatt-s3dx.vercel.app/",
    video: "https://drive.google.com/file/d/1Ni7-6G_rQ2WPkNWkro1a2ZQYwM5VPRyl/view?usp=sharing",
    highlights: [
      "Built full-stack booking system with real-time availability and date validation",
      "Integrated Razorpay payment workflows, webhook verification, and secure transactions",
      "Designed multilingual UI using i18n and responsive architecture",
      "Focused on performance, scalability, and secure authentication"
    ],
  },
  {
    id: 6,
    title: "E-Rent",
    shortDesc: "Distributed marketplace platform with modular backend, secure workflows, and scalable APIs.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "REST APIs"],
    github: "https://github.com/Rishabh-k-Paliwal",
    live: "https://project2026for-vercel-bt3c.vercel.app/",
    video: "",
    highlights: [
      "Developed modular Node.js backend with role-based access and secure workflows",
      "Optimized database queries and indexing for high-performance APIs",
      "Implemented scalable architecture, validation, and error handling",
      "Built reusable frontend components and state-driven UI"
    ],
  },
  {
    id: 3,
    title: "C++ OS & Algo Simulator",
    shortDesc: "Modular simulation suite studying OS internals and algorithmic behavior with multithreading.",
    techStack: ["C++", "Multithreading", "Algorithms", "OS Internals"],
    github: "https://github.com/Rishabh-k-Paliwal",
    live: "",
    video: "https://drive.google.com/file/d/1yh6pXWLdrMEX_0NYUI4IGB6q6oLUuTYX/view?usp=sharing",
    highlights: [
      "Built a modular C++ simulation suite to study OS internals and algorithmic behavior",
      "Implemented CPU scheduling strategies and evaluated performance using Gantt charts",
      "Designed multithreaded execution models using 12+ threads, analyzing efficiency",
      "Analyzed algorithmic complexity through implementations of sorting algorithms"
    ],
  },
  {
    id: 4,
    title: "Insight Accelerator",
    shortDesc: "End-to-end data analytics project simulating real-world analyst workflows and reporting.",
    techStack: ["Python", "SQL", "Power BI", "Jupyter"],
    github: "https://github.com/Rishabh-k-Paliwal/InsightAccelerator.git",
    live: "",
    video: "",
    highlights: [
      "Executed complete data preparation and exploratory data analysis using Python",
      "Simulated real-world business transactions using complex SQL queries",
      "Built an interactive Power BI dashboard to analyze customer segments",
      "Translated findings into structured reports for business recommendations"
    ],
  },
  {
    id: 5,
    title: "MERN Expense Tracker",
    shortDesc: "Secure personal finance management web application with real-time spending insights.",
    techStack: ["MongoDB", "Express", "React", "Node", "JWT"],
    github: "https://github.com/Rishabh-k-Paliwal/expense_manager.git",
    live: "",
    video: "",
    highlights: [
      "Designed a secure, user-specific expense tracking system with JWT-based authentication",
      "Implemented CRUD operations for recording and updating financial records",
      "Developed a responsive UI to ensure seamless usage across devices",
      "Focused on data privacy by isolating records per authenticated user"
    ],
  }
];

const skillsData = {
  "Languages": { icon: <Terminal size={20} />, list: ["C++", "C#", "JavaScript", "Python", "SQL"] },
  "Frontend": { icon: <Globe size={20} />, list: ["React", "HTML5", "CSS3", "i18next", "Framer Motion"] },
  "Backend": { icon: <Cpu size={20} />, list: ["Node.js", "Express.js", "REST APIs", "JWT Auth"] },
  "Databases": { icon: <Database size={20} />, list: ["MongoDB", "MySQL", "PostgreSQL"] },
  "Data Science": { icon: <Layers size={20} />, list: ["Pandas", "NumPy", "Power BI", "Jupyter"] },
  "Tools": { icon: <Code2 size={20} />, list: ["Git/GitHub", "Docker", "Postman", "Razorpay"] }
};

const coursesData = [
  { name: "Cloud Computing", platform: "NPTEL (IIT Kharagpur)", date: "2024", link: "/my_certificates/Cloud Computing certificate.pdf" },
  { name: "Marketing Analytics", platform: "NPTEL (IIT Kharagpur)", date: "2025", link: "/my_certificates/Marketing Analytics.pdf" },
  { name: "MongoDB Node.js Developer Path", platform: "MongoDB University (SmartBridge)", date: "2025", link: "/my_certificates/MongoDb_Certificate.pdf" },
  { name: "Full Stack Developer – MERN", platform: "SmartBridge", date: "2025", link: "/my_certificates/Certificate - SmartInternz.pdf" },
  { name: "DevOps Fundamentals", platform: "IBM Career Education Program", date: "2025", link: "/my_certificates/IBMCE CEDEV2IN Certificate _ IBM Career Education Program.pdf" },
  { name: "Agile Methodologies", platform: "IBM Career Education Program", date: "2025", link: "/my_certificates/IBMCE CEAGL1IN Certificate _ IBM Career Education Program.pdf" },
  { name: "DevOps, Agile & Design Thinking", platform: "IBM Career Education Program", date: "2025", link: "/my_certificates/IBMCE CEDEA1IN Certificate _ IBM Career Education Program.pdf" },
  { name: "CSS & JavaScript Complete Course for Beginners", platform: "Udemy", date: "2025", link: "/my_certificates/css,js certificate udaemy.pdf" },
  { name: "Git Version Control | Git Essentials for Developers", platform: "Udemy", date: "2025", link: "/my_certificates/git version control.pdf" },
  { name: "Prompt Engineering", platform: "Self-Learning", date: "2025", link: "/my_certificates/promptEngineering.pdf" },
  { name: "MySQL Database", platform: "Self-Learning", date: "2025", link: "/my_certificates/MySql.pdf" },
  { name: "C++ Programming", platform: "Self-Learning", date: "2025", link: "/my_certificates/c++.pdf" }
];

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } }
};

const getEmbeddableVideoUrl = (url) => {
  if (!url) return '';

  if (url.includes('drive.google.com')) {
    const match = url.match(/\/file\/d\/([^/]+)/);
    if (match?.[1]) return `https://drive.google.com/file/d/${match[1]}/preview`;
  }

  if (url.includes('youtube.com/watch')) {
    const match = url.match(/[?&]v=([^&]+)/);
    if (match?.[1]) return `https://www.youtube.com/embed/${match[1]}`;
  }

  if (url.includes('youtu.be/')) {
    const match = url.match(/youtu\.be\/([^?&/]+)/);
    if (match?.[1]) return `https://www.youtube.com/embed/${match[1]}`;
  }

  return url;
};

// Components
const Navbar = () => (
  <nav className="navbar">
    <a href="/" className="nav-logo" aria-label="Home">
      <img src="/garuda.png" alt="Rishabh Paliwal logo" className="nav-logo-image" />
    </a>
    <div className="nav-links">
      <a href="#about" className="nav-link">About</a>
      <a href="#skills" className="nav-link">Skills</a>
      <a href="#projects" className="nav-link">Projects</a>
      <a href="#contact" className="nav-link">Contact</a>
    </div>
    <a href="mailto:rishabh.kp.04@gmail.com" className="cta-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.8rem' }}>Hire Me</a>
  </nav>
);

const Hero = () => (
  <section className="hero">
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="container"
    >
      <h1 className="hero-name">Rishabh Paliwal</h1>
      <p className="hero-subtitle">
        B.Tech Computer Science student at VIT. Specialist in scalable full-stack applications and distributed systems.
      </p>
      <div className="hero-cta">
        <a href="#projects" className="cta-secondary">
          <Code2 size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          Projects
        </a>
        <a href="https://linkedin.com/in/rishabh-paliwal" target="_blank" rel="noopener noreferrer" className="cta-secondary">
          <Linkedin size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          LinkedIn
        </a>
        <a href="https://github.com/Rishabh-k-Paliwal" target="_blank" rel="noopener noreferrer" className="cta-secondary">
          <Github size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          GitHub
        </a>
        <a href="https://leetcode.com/u/rishabhrp13/" target="_blank" rel="noopener noreferrer" className="cta-secondary">
          <Code2 size={18} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
          LeetCode
        </a>
      </div>
    </motion.div>
  </section>
);

const About = () => (
  <section id="about" className="section">
    <div className="container">
      <motion.h2 {...fadeInUp} className="section-title">About Me</motion.h2>
      <div className="about-grid">
        <motion.div {...fadeInUp}>
          <p className="about-text">
            I am a final-year CS student at Vellore Institute of Technology (CGPA: 8.53).
            My passion lies in architecting robust digital solutions and diving deep into system internals.
          </p>
          <p className="about-text">
            From building multilingual astrology platforms to C++ multithreaded simulations,
            I thrive on technical challenges that require a blend of solid engineering and creative problem-solving.
          </p>
          <div className="education" style={{ background: 'var(--glass)', border: '1px solid var(--glass-border)', padding: '1.5rem', borderRadius: '16px' }}>
            <h3 style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <GraduationCap className="text-primary" /> Education
            </h3>
            <p style={{ fontWeight: 600 }}>B.Tech in Computer Science & Engineering</p>
            <p style={{ color: 'var(--text-muted)' }}>Vellore Institute of Technology</p>
            <p style={{ color: 'var(--accent-secondary)', fontSize: '0.9rem' }}>CGPA: 8.53/10 • Expected 2026</p>
          </div>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="about-stats"
        >
          {[
            { label: 'CGPA', value: '8.53' },
            { label: 'Projects', value: '10+' },
            { label: 'Courses', value: '9+' },
            { label: 'Languages', value: '5' }
          ].map((stat, i) => (
            <motion.div key={i} variants={fadeInUp} className="stat-card">
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="section" style={{ background: 'rgba(99, 102, 241, 0.02)' }}>
    <div className="container">
      <motion.h2 {...fadeInUp} className="section-title">Technical Expertise</motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="skills-grid"
      >
        {Object.entries(skillsData).map(([category, data]) => (
          <motion.div key={category} variants={fadeInUp} className="skill-category">
            <h3 className="skill-category-title">
              {data.icon} {category}
            </h3>
            <div className="skills-list">
              {data.list.map((skill, idx) => (
                <span key={idx} className="skill-tag">{skill}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const DemoModal = ({ project, onClose }) => {
  const embedUrl = getEmbeddableVideoUrl(project?.video);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <motion.div
      className="video-modal-overlay"
      onClick={onClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="video-modal"
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, y: 20, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
      >
        <div className="video-modal-header">
          <h3>{project.title} Demo</h3>
          <button type="button" onClick={onClose} className="video-close-btn" aria-label="Close demo modal">
            <X size={18} />
          </button>
        </div>
        <div className="video-frame-wrap">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              title={`${project.title} demo video`}
              className="video-frame"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <p className="video-fallback">Video preview is unavailable. Open the demo in a new tab.</p>
          )}
        </div>
        <a href={project.video} target="_blank" rel="noopener noreferrer" className="video-open-link">
          Open Original Demo <ExternalLink size={14} />
        </a>
      </motion.div>
    </motion.div>
  );
};

const ProjectCard = ({ project, onPlayDemo }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      {...fadeInUp}
      className="project-card"
    >
      <div className="project-content">
        <div className="project-header">
          <h3 className="project-title">{project.title}</h3>
        </div>
        <p className="project-short-desc">{project.shortDesc}</p>
        <div className="tech-stack">
          {project.techStack.map((tech, idx) => (
            <span key={idx} className="tech-tag">{tech}</span>
          ))}
        </div>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="project-details"
            >
              <ul className="highlights-list">
                {project.highlights.map((highlight, idx) => (
                  <li key={idx} className="highlight-item">{highlight}</li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>

        <div className="project-actions">
          {project.live && (
            <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link" style={{ borderColor: 'var(--accent-secondary)' }}>
              <ExternalLink size={16} /> Live
            </a>
          )}
          {project.github && (
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
              <Github size={16} /> Source
            </a>
          )}
          {project.video && (
            <button
              type="button"
              className="project-link project-demo-btn"
              onClick={() => onPlayDemo(project)}
            >
              <Video size={16} /> Demo
            </button>
          )}
          <button
            onClick={() => setExpanded(!expanded)}
            className="details-btn"
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {expanded ? 'Hide Impact' : 'Key Achievements'}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const Projects = ({ onPlayDemo }) => (
  <section id="projects" className="section">
    <div className="container">
      <motion.h2 {...fadeInUp} className="section-title">Featured Projects</motion.h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} onPlayDemo={onPlayDemo} />
        ))}
      </div>
    </div>
  </section>
);

const Courses = () => (
  <section className="section" style={{ background: 'rgba(6, 182, 212, 0.02)' }}>
    <div className="container">
      <motion.h2 {...fadeInUp} className="section-title">Courses Completed</motion.h2>
      <motion.div
        variants={staggerContainer}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true }}
        className="certificates-grid"
      >
        {coursesData.map((cert, idx) => (
          <motion.div key={idx} variants={fadeInUp} className="cert-card">
            <Award size={24} color="var(--accent-secondary)" style={{ marginBottom: '1rem' }} />
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-platform">{cert.platform}</p>
            <p className="cert-date">{cert.date}</p>
            <a href={cert.link} className="cert-link">View Proof <ExternalLink size={14} /></a>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="footer">
    <div className="container">
      <motion.div
        {...fadeInUp}
        className="contact-card"
      >
        <h2 className="footer-title">Get In Touch</h2>
        <p className="footer-subtitle">Available for software engineering opportunities and collaboration.</p>

        <div className="contact-links">
          <a href="mailto:rishabh.kp.04@gmail.com" className="contact-link">
            <Mail size={20} /> Email
          </a>
          <a href="https://linkedin.com/in/rishabh-paliwal" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Linkedin size={20} /> LinkedIn
          </a>
          <a href="https://github.com/Rishabh-k-Paliwal" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Github size={20} /> GitHub
          </a>
          <a href="https://leetcode.com/u/rishabhrp13/" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Code2 size={20} /> LeetCode
          </a>
          <a href="https://codeforces.com/profile/Rishabh_paliwal" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Code2 size={20} /> Codeforces
          </a>
          <a href="https://www.geeksforgeeks.org/profile/rishabxazl?tab=overview" target="_blank" rel="noopener noreferrer" className="contact-link">
            <Globe size={20} /> GFG
          </a>
        </div>

        <div style={{ marginTop: '4rem', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
          © {new Date().getFullYear()} Rishabh Paliwal. Built with React & Passion.
        </div>
      </motion.div>
    </div>
  </section>
);

// Main App
const App = () => {
  const [activeDemo, setActiveDemo] = useState(null);

  return (
    <div className="app">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects onPlayDemo={setActiveDemo} />
      <Courses />
      <Contact />
      <AnimatePresence>
        {activeDemo && <DemoModal project={activeDemo} onClose={() => setActiveDemo(null)} />}
      </AnimatePresence>
    </div>
  );
};

export default App;

