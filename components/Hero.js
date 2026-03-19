import { portfolioData } from '../data/portfolio'

export default function Hero() {
  return (
    <section style={styles.hero}>
      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.title}>{portfolioData.name}</h1>
          <h2 style={styles.subtitle}>{portfolioData.title}</h2>
          <p style={styles.tagline}>{portfolioData.tagline}</p>
          
          <div style={styles.cta}>
            <a href="#contact" style={{ ...styles.ctaButton, background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)' }}>
              Get In Touch
            </a>
            <a href="#projects" style={{ ...styles.ctaButton, border: '2px solid #8b5cf6', color: '#8b5cf6', background: 'transparent' }}>
              View Projects
            </a>
          </div>

          <div style={styles.socialLinks}>
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={portfolioData.social.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
          </div>
        </div>

        <div style={styles.imageContainer}>
          <img src="/profile.jpg" alt="Nithin A" style={styles.profileImage} />
        </div>
      </div>
    </section>
  )
}

const styles = {
  hero: {
    padding: '100px 20px',
    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    alignItems: 'center',
  },
  content: {
    color: '#e0e0e0',
  },
  title: {
    fontSize: '48px',
    fontWeight: 'bold',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '24px',
    marginBottom: '10px',
  },
  tagline: {
    fontSize: '18px',
    color: '#b0b0b0',
    marginBottom: '30px',
  },
  cta: {
    display: 'flex',
    gap: '15px',
    marginBottom: '30px',
  },
  ctaButton: {
    padding: '12px 30px',
    borderRadius: '8px',
    cursor: 'pointer',
    fontSize: '16px',
    textDecoration: 'none',
    transition: 'all 0.3s',
  },
  socialLinks: {
    display: 'flex',
    gap: '20px',
    fontSize: '16px',
  },
  imageContainer: {
    textAlign: 'center',
  },
  profileImage: {
    width: '100%',
    maxWidth: '400px',
    borderRadius: '12px',
    border: '3px solid #8b5cf6',
  },
}
