import { portfolioData } from '../data/portfolio'

export default function Experience() {
  return (
    <section id="experience" style={styles.experience}>
      <div style={styles.container}>
        <h2 style={styles.title}>Experience</h2>
        
        <div style={styles.timeline}>
          {portfolioData.experience.map((exp, idx) => (
            <div key={idx} style={styles.timelineItem}>
              <div style={styles.timelineMarker}></div>
              
              <div style={styles.card}>
                <div style={styles.header}>
                  <h3 style={styles.role}>{exp.role}</h3>
                  <span style={styles.company}>{exp.company}</span>
                </div>
                
                <p style={styles.duration}>{exp.duration} • {exp.location}</p>
                <p style={styles.description}>{exp.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  experience: {
    padding: '80px 20px',
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
  timeline: {
    position: 'relative',
  },
  timelineItem: {
    display: 'grid',
    gridTemplateColumns: '50px 1fr',
    gap: '30px',
    marginBottom: '30px',
    position: 'relative',
  },
  timelineMarker: {
    width: '20px',
    height: '20px',
    background: '#8b5cf6',
    borderRadius: '50%',
    marginTop: '10px',
  },
  card: {
    padding: '20px',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(139, 92, 246, 0.3)',
  },
  header: {
    marginBottom: '10px',
  },
  role: {
    fontSize: '20px',
    color: '#8b5cf6',
  },
  company: {
    fontSize: '16px',
    color: '#06b6d4',
  },
  duration: {
    fontSize: '14px',
    color: '#b0b0b0',
    marginBottom: '10px',
  },
  description: {
    color: '#c0c0c0',
    lineHeight: '1.6',
  },
}
