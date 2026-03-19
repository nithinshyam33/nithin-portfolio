import { portfolioData } from '../data/portfolio'

export default function Skills() {
  return (
    <section id="skills" style={styles.skills}>
      <div style={styles.container}>
        <h2 style={styles.title}>Skills</h2>
        
        <div style={styles.skillsGrid}>
          {Object.entries(portfolioData.skills).map(([category, skillList]) => (
            <div key={category} style={styles.skillCategory}>
              <h3 style={styles.categoryTitle}>{category}</h3>
              <div style={styles.skillsList}>
                {skillList.map((skill) => (
                  <span key={skill} style={styles.skill}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles = {
  skills: {
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
  skillsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '30px',
  },
  skillCategory: {
    padding: '20px',
    background: 'rgba(22, 33, 62, 0.8)',
    borderRadius: '8px',
    border: '1px solid rgba(139, 92, 246, 0.3)',
  },
  categoryTitle: {
    color: '#8b5cf6',
    marginBottom: '15px',
    fontSize: '18px',
  },
  skillsList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '10px',
  },
  skill: {
    padding: '8px 12px',
    background: 'rgba(139, 92, 246, 0.2)',
    border: '1px solid rgba(139, 92, 246, 0.5)',
    borderRadius: '20px',
    fontSize: '14px',
    color: '#06b6d4',
  },
}
