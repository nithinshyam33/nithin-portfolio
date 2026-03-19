import { useState } from 'react'

export default function Header({ isDark, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <h1>Nithin A</h1>
        </div>
        
        <div style={styles.navLinks}>
          <a href="#about" style={styles.navLink}>About</a>
          <a href="#skills" style={styles.navLink}>Skills</a>
          <a href="#experience" style={styles.navLink}>Experience</a>
          <a href="#projects" style={styles.navLink}>Projects</a>
          <a href="#certifications" style={styles.navLink}>Certifications</a>
          <a href="#contact" style={styles.navLink}>Contact</a>
        </div>

        <button 
          onClick={toggleTheme}
          style={{
            ...styles.themeToggle,
            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
          }}
        >
          {isDark ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  )
}

const styles = {
  header: {
    background: 'rgba(22, 33, 62, 0.95)',
    backdropFilter: 'blur(10px)',
    borderBottom: '1px solid rgba(139, 92, 246, 0.2)',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '20px',
  },
  logo: {
    color: '#8b5cf6',
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    gap: '30px',
  },
  navLink: {
    color: '#e0e0e0',
    textDecoration: 'none',
    fontSize: '16px',
    transition: 'color 0.3s',
    cursor: 'pointer',
  },
  themeToggle: {
    border: 'none',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    fontSize: '20px',
    cursor: 'pointer',
  },
}
