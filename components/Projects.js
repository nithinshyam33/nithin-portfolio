import { portfolioData } from '../data/portfolio'

export default function Projects() {
  return (
    <section id="projects" style={styles.projects}>
      <div style={styles.container}>
        <h2 style={styles.title}>Projects</h2>
        
        <div style={styles.projectsGrid}>
          {portfolioData.projects.map((project, idx) => (
            <div key={idx} style={styles.projectCard}>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectDescription}>{project.description}</p>
              
              <div style={styles.projectLinks}>
                <a href={project.github} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  View on GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  projects: {
    padding: '80px 20px',
    background: 'rgba(139, 92, 246, 0.05)',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
  },
  title: {
    fontSize: '36px',
    textAlign: 'center',
    marginBottom: '50px',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  projectsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '30px',
  },
  projectCard: {
    padding: '25px',
    background: 'rgba(22, 33, 62, 0.8)',
    borderRadius: '8px',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    transition: 'all 0.3s',
    cursor: 'pointer',
  },
  projectTitle: {
    fontSize: '20px',
    color: '#8b5cf6',
    marginBottom: '10px',
  },
  projectDescription: {
    color: '#c0c0c0',
    lineHeight: '1.6',
    marginBottom: '20px',
  },
  projectLinks: {
    marginTop: '20px',
  },
  link: {
    color: '#06b6d4',
    textDecoration: 'none',
    fontWeight: 'bold',
  },
}
