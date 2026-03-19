import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import Skills from '../components/Skills'
import Experience from '../components/Experience'
import Projects from '../components/Projects'
import Certifications from '../components/Certifications'
import Contact from '../components/Contact'

export default function Home({ isDark, toggleTheme }) {
  return (
    <>
      <Head>
        <title>Nithin A | Cybersecurity Portfolio</title>
        <meta name="description" content="Professional Cybersecurity Portfolio - SOC Analyst" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
      <Header isDark={isDark} toggleTheme={toggleTheme} />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
      
      <footer style={{ textAlign: 'center', padding: '40px 20px', borderTop: '1px solid rgba(139, 92, 246, 0.2)' }}>
        <p>© 2026 Nithin A. All rights reserved.</p>
      </footer>
    </>
  )
}
