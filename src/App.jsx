import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Landing from './pages/Landing.jsx'
import CreateVault from './pages/CreateVault.jsx'
import EnterVault from './pages/EnterVault.jsx'
import LoadingVault from './pages/LoadingVault.jsx'
import VaultOpening from './pages/VaultOpening.jsx'
import VaultSuccess from './pages/VaultSuccess.jsx'
import RecoveryPhrase from './pages/RecoveryPhrase.jsx'
import VerifyRecoveryPhrase from './pages/VerifyRecoveryPhrase.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Portfolio from './pages/Portfolio.jsx'
import AssetDetails from './pages/AssetDetails.jsx'
import Deposit from './pages/Deposit.jsx'
import Withdraw from './pages/Withdraw.jsx'
import Exchange from './pages/Exchange.jsx'
import Transactions from './pages/Transactions.jsx'
import TransactionDetails from './pages/TransactionDetails.jsx'
import Notifications from './pages/Notifications.jsx'
import Settings from './pages/Settings.jsx'
import VaultSecurity from './pages/VaultSecurity.jsx'
import KYC from './pages/KYC.jsx'
import VerifyIdentity from './pages/VerifyIdentity.jsx'
import Language from './pages/Language.jsx'
import Currency from './pages/Currency.jsx'
import Privacy from './pages/Privacy.jsx'
import TrustedDevices from './pages/TrustedDevices.jsx'
import About from './pages/About.jsx'
import Profile from './pages/Profile.jsx'
import Search from './pages/Search.jsx'
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
          <Route path="/loading-vault" element={<LoadingVault />} />
          <Route path="/vault-opening" element={<VaultOpening />} />
          <Route path="/vault-success" element={<VaultSuccess />} />
          <Route path="/recovery-phrase" element={<RecoveryPhrase />} />
          <Route path="/verify-recovery-phrase" element={<VerifyRecoveryPhrase />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/asset-details" element={<AssetDetails />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/exchange" element={<Exchange />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/transaction-details" element={<TransactionDetails />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/security" element={<VaultSecurity />} />
          <Route path="/kyc" element={<KYC />} />
          <Route path="/verify-identity" element={<VerifyIdentity />} />
          <Route path="/language" element={<Language />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/trusted-devices" element={<TrustedDevices />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/search" element={<Search />} />
          <Route path="/market" element={<Market />} />
          <Route path="/news" element={<News />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
