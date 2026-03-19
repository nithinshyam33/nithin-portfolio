import { useState, useEffect } from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [isDark, setIsDark] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const saved = localStorage.getItem('theme')
    if (saved) {
      setIsDark(saved === 'dark')
    }
  }, [])

  const toggleTheme = () => {
    const newTheme = !isDark ? 'dark' : 'light'
    setIsDark(!isDark)
    localStorage.setItem('theme', newTheme ? 'dark' : 'light')
  }

  if (!mounted) return null

  return (
    <div className={isDark ? 'dark-mode' : 'light-mode'}>
      <Component {...pageProps} isDark={isDark} toggleTheme={toggleTheme} />
    </div>
  )
}

export default MyApp
