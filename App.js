import React, { useState } from 'react';
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, ChevronUp, Video } from 'lucide-react';
import './styles.css';

// Data Files
const skillsData = {
  "Languages": [
    { name: "C++", proficiency: "Advanced", link: "#" },
    { name: "JavaScript", proficiency: "Advanced", link: "#" },
    { name: "Python", proficiency: "Intermediate", link: "#" }
  ],
  "Frontend": [
    { name: "React", proficiency: "Advanced", link: "#" },
    { name: "HTML/CSS", proficiency: "Advanced", link: "#" }
  ],
  "Backend": [
    { name: "Node.js", proficiency: "Advanced", link: "#" },
    { name: "Express.js", proficiency: "Advanced", link: "#" },
    { name: "REST APIs", proficiency: "Advanced", link: "#" },
    { name: "JWT Auth", proficiency: "Advanced", link: "#" }
  ],
  "Databases": [
    { name: "MongoDB", proficiency: "Advanced", link: "#" },
    { name: "SQL", proficiency: "Intermediate", link: "#" }
  ],
  "Tools": [
    { name: "Git/GitHub", proficiency: "Advanced", link: "#" },
    { name: "Postman", proficiency: "Advanced", link: "#" }
  ]
};

const projectsData = [
  {
    id: 1,
    title: "AI-Powered Distributed Web Application",
    shortDesc: "Scalable full-stack application with real-time LLM interactions and dynamic model routing.",
    techStack: ["React", "Node.js", "REST APIs", "Multiple LLMs"],
    github: "https://github.com/Rishabh-k-Paliwal",
    live: "",
    video: "", // Add video demo link here
    highlights: [
      "Designed and built a scalable full-stack application using React",
      "Implemented streaming responses for real-time interactions with multiple LLMs",
      "Engineered dynamic model-routing logic to integrate multiple API endpoints",
      "Asynchronous request handling and efficient state management"
    ],
    duration: "Nov 2025 – Jan 2026"
  },
  {
    id: 2,
    title: "Astrologix — Scalable MERN Platform",
    shortDesc: "Real-time consultancy platform with slot management, video communication, and payment integration.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "NodeMailer"],
    github: "https://github.com/Rishabh-k-Paliwal",
    live: "",
    video: "", // Add video demo link here
    highlights: [
      "Led four-member team designing and implementing consultancy system",
      "Developed slot management and notification pipeline using NodeMailer",
      "Integrated video communication and payment workflows",
      "Implemented CRUD operations and role-based access control"
    ],
    duration: "Sep 2025 – Nov 2025"
  },
  {
    id: 3,
    title: "C++ OS and Algorithm Simulator",
    shortDesc: "Modular simulation suite studying OS internals and algorithmic behavior with multithreading.",
    techStack: ["C++", "Multithreading", "Data Structures", "Algorithms"],
    github: "https://github.com/Rishabh-k-Paliwal",
    live: "",
    video: "", // Add video demo link here
    highlights: [
      "Built a modular C++ simulation suite to study OS internals and algorithmic behavior",
      "Implemented CPU scheduling strategies and evaluated performance using Gantt charts",
      "Designed multithreaded execution models using 12+ threads, analyzing efficiency",
      "Analyzed algorithmic complexity through implementations of sorting algorithms"
    ],
    duration: "Aug 2025 – Sep 2025"
  }
];

const certificatesData = [
  {
    name: "System of Prompt Engineering",
    platform: "Udemy",
    date: "Jan 2026",
    link: "#"
  },
  {
    name: "MongoDB Node.js Developer",
    platform: "MongoDB University",
    date: "April 2025",
    link: "#"
  },
  {
    name: "MERN Full-Stack Development",
    platform: "SmartBridge",
    date: "April 2025",
    link: "#"
  }
];

// Components
const Hero = () => (
  <section className="hero">
    <div className="container">
      <h1 className="hero-name">Rishabh Paliwal</h1>
      <p className="hero-title">Aspiring Software Development Engineer</p>
      <p className="hero-subtitle">Building scalable systems and solving complex problems</p>
      <div className="hero-cta">
        <a href="#projects" className="cta-primary">View Projects</a>
        <a href="#contact" className="cta-secondary">Get in Touch</a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-title">About</h2>
      <div className="about-content">
        <p className="about-text">
          Computer Science Engineering student at Vellore Institute of Technology with a CGPA of 8.50. 
          I specialize in building full-stack applications with a focus on scalability, system design, 
          and clean architecture. My experience spans from real-time distributed systems to multithreaded 
          OS simulations.
        </p>
        <p className="about-text">
          Currently seeking SDE roles where I can contribute to building impactful products and continue 
          growing as an engineer.
        </p>
        <div className="education">
          <h3 className="education-title">Education</h3>
          <p className="education-details">B.Tech in Computer Science and Engineering</p>
          <p className="education-institute">Vellore Institute of Technology • CGPA: 8.50/10</p>
          <p className="education-year">Expected Graduation: Aug 2026</p>
        </div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-title">Technical Skills</h2>
      <div className="skills-grid">
        {Object.entries(skillsData).map(([category, skills]) => (
          <div key={category} className="skill-category">
            <h3 className="skill-category-title">{category}</h3>
            <div className="skills-list">
              {skills.map((skill, idx) => (
                <div key={idx} className="skill-card">
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-prof">{skill.proficiency}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ProjectCard = ({ project }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="project-card">
      <div className="project-header">
        <h3 className="project-title">{project.title}</h3>
        <span className="project-duration">{project.duration}</span>
      </div>
      <p className="project-short-desc">{project.shortDesc}</p>
      <div className="tech-stack">
        {project.techStack.map((tech, idx) => (
          <span key={idx} className="tech-tag">{tech}</span>
        ))}
      </div>
      
      {expanded && (
        <div className="project-details">
          <ul className="highlights-list">
            {project.highlights.map((highlight, idx) => (
              <li key={idx} className="highlight-item">{highlight}</li>
            ))}
          </ul>
        </div>
      )}
      
      <div className="project-actions">
        <button 
          onClick={() => setExpanded(!expanded)} 
          className="details-btn"
        >
          {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          {expanded ? 'Hide Details' : 'Show Details'}
        </button>
        {project.github && (
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
            <Github size={16} />
            GitHub
          </a>
        )}
        {project.live && (
          <a href={project.live} target="_blank" rel="noopener noreferrer" className="project-link">
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
        {project.video && (
          <a href={project.video} target="_blank" rel="noopener noreferrer" className="project-link video-link">
            <Video size={16} />
            Video Demo
          </a>
        )}
      </div>
    </div>
  );
};

const Projects = () => (
  <section id="projects" className="section">
    <div className="container">
      <h2 className="section-title">Projects</h2>
      <div className="projects-grid">
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  </section>
);

const Certificates = () => (
  <section className="section">
    <div className="container">
      <h2 className="section-title">Certifications</h2>
      <div className="certificates-grid">
        {certificatesData.map((cert, idx) => (
          <div key={idx} className="cert-card">
            <h3 className="cert-name">{cert.name}</h3>
            <p className="cert-platform">{cert.platform}</p>
            <p className="cert-date">{cert.date}</p>
            <a href={cert.link} className="cert-link">View Certificate →</a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="footer">
    <div className="container">
      <h2 className="footer-title">Let's Connect</h2>
      <p className="footer-subtitle">Open to SDE opportunities</p>
      <div className="contact-links">
        <a href="mailto:rishabh.kp.04@gmail.com" className="contact-link">
          <Mail size={20} />
          rishabh.kp.04@gmail.com
        </a>
        <a href="https://github.com/Rishabh-k-Paliwal" target="_blank" rel="noopener noreferrer" className="contact-link">
          <Github size={20} />
          GitHub
        </a>
        <a href="https://linkedin.com/in/rishabh-paliwal" target="_blank" rel="noopener noreferrer" className="contact-link">
          <Linkedin size={20} />
          LinkedIn
        </a>
      </div>
    </div>
  </section>
);

// Main App
const App = () => {
  return (
    <div className="app">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  );
};

export default App;