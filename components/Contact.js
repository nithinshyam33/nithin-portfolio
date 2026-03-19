import { portfolioData } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" style={styles.contact}>
      <div style={styles.container}>
        <h2 style={styles.title}>Get In Touch</h2>
        
        <p style={styles.subtitle}>
          Interested in discussing cybersecurity, SOC opportunities, or collaboration? Let's connect!
        </p>

        <div style={styles.contactMethods}>
          <a href={`mailto:${portfolioData.email}`} style={styles.contactMethod}>
            <span style={styles.icon}>📧</span>
            <div>
              <h3>Email</h3>
              <p>{portfolioData.email}</p>
            </div>
          </a>

          <a href={`tel:${portfolioData.phone}`} style={styles.contactMethod}>
            <span style={styles.icon}>📱</span>
            <div>
              <h3>Phone</h3>
              <p>{portfolioData.phone}</p>
            </div>
          </a>
        </div>

        <div style={styles.socialLinks}>
          <h3>Follow & Connect</h3>
          <div style={styles.links}>
            <a href={portfolioData.social.github} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              GitHub
            </a>
            <a href={portfolioData.social.linkedin} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              LinkedIn
            </a>
            <a href={portfolioData.social.instagram} target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
              Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

const styles = {
  contact: {
    padding: '80px 20px',
    background: 'rgba(139, 92, 246, 0.05)',
  },
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    textAlign: 'center',
  },
  title: {
    fontSize: '36px',
    marginBottom: '20px',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  subtitle: {
    fontSize: '18px',
    color: '#c0c0c0',
    marginBottom: '40px',
  },
  contactMethods: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
    marginBottom: '40px',
  },
  contactMethod: {
    padding: '20px',
    background: 'rgba(22, 33, 62, 0.8)',
    borderRadius: '8px',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    display: 'flex',
    gap: '15px',
    textDecoration: 'none',
    color: '#e0e0e0',
  },
  icon: {
    fontSize: '30px',
  },
  socialLinks: {
    marginTop: '40px',
  },
  links: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  socialLink: {
    padding: '10px 20px',
    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
    borderRadius: '20px',
    color: 'white',
    textDecoration: 'none',
  },
}
