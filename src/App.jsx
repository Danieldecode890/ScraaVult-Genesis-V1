import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import CreateVault from './pages/CreateVault.jsx'
import EnterVault from './pages/EnterVault.jsx'
import Market from './pages/Market.jsx'
import News from './pages/News.jsx'
import './App.css'

function App() {
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    const saved = localStorage.getItem('sv-theme')
    if (saved) setTheme(saved)
  }, [])

  useEffect(() => {
    document.body.className = theme === 'light' ? 'sv-light' : ''
    localStorage.setItem('sv-theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="sv-app">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main className="sv-main">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create-vault" element={<CreateVault />} />
          <Route path="/enter-vault" element={<EnterVault />} />
          <Route path="/market" element={<Market />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
