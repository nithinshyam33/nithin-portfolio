import { portfolioData } from '../data/portfolio'

export default function Certifications() {
  return (
    <section id="certifications" style={styles.certifications}>
      <div style={styles.container}>
        <h2 style={styles.title}>Certifications</h2>
        
        <div style={styles.certsList}>
          {portfolioData.certifications.map((cert, idx) => (
            <div key={idx} style={styles.certCard}>
              <div style={styles.certIcon}>🏆</div>
              <div style={styles.certContent}>
                <h3 style={styles.certTitle}>{cert.title}</h3>
                <p style={styles.certIssuer}>{cert.issuer}</p>
                {cert.skills && (
                  <div style={styles.certSkills}>
                    {cert.skills.map((skill) => (
                      <span key={skill} style={styles.certSkill}>{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  certifications: {
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
  certsList: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
  },
  certCard: {
    padding: '20px',
    background: 'rgba(139, 92, 246, 0.1)',
    borderRadius: '8px',
    border: '1px solid rgba(139, 92, 246, 0.3)',
    display: 'flex',
    gap: '15px',
  },
  certIcon: {
    fontSize: '30px',
  },
  certContent: {
    flex: 1,
  },
  certTitle: {
    color: '#8b5cf6',
    marginBottom: '5px',
  },
  certIssuer: {
    color: '#06b6d4',
    fontSize: '14px',
    marginBottom: '10px',
  },
  certSkills: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '8px',
  },
  certSkill: {
    fontSize: '12px',
    padding: '4px 8px',
    background: 'rgba(6, 182, 212, 0.2)',
    borderRadius: '4px',
    color: '#06b6d4',
  },
}
