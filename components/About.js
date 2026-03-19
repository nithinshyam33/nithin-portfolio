import { portfolioData } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" style={styles.about}>
      <div style={styles.container}>
        <h2 style={styles.title}>About Me</h2>
        
        <div style={styles.content}>
          <p style={styles.bio}>{portfolioData.about}</p>
          
          <div style={styles.stats}>
            <div style={styles.stat}>
              <h3>📍 Location</h3>
              <p>{portfolioData.location}</p>
            </div>
            <div style={styles.stat}>
              <h3>📧 Email</h3>
              <p><a href={`mailto:${portfolioData.email}`}>{portfolioData.email}</a></p>
            </div>
            <div style={styles.stat}>
              <h3>📱 Phone</h3>
              <p><a href={`tel:${portfolioData.phone}`}>{portfolioData.phone}</a></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  about: {
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
  content: {
    display: 'grid',
    gap: '30px',
  },
  bio: {
    fontSize: '18px',
    lineHeight: '1.8',
    color: '#c0c0c0',
  },
  stats: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  stat: {
    padding: '20px',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(139, 92, 246, 0.3)',
  },
}
