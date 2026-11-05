import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/LoadingVault.css'

function LoadingVault() {
  const navigate = useNavigate()
  const [progress, setProgress] = useState(0)
  const [message, setMessage] = useState('Initializing Secure Environment...')

  useEffect(() => {
    const messages = [
      { percent: 10, text: 'Initializing Secure Environment...' },
      { percent: 25, text: 'Generating Encryption Keys...' },
      { percent: 45, text: 'Encrypting Bitcoin Vault...' },
      { percent: 65, text: 'Verifying Security...' },
      { percent: 85, text: 'Preparing Recovery System...' },
      { percent: 100, text: 'Vault Successfully Created' },
    ]

    let current = 0

    const interval = setInterval(() => {
      current++
      setProgress(current)

      const currentMessage = messages.findLast(
        (item) => current >= item.percent
      )

      if (currentMessage) {
        setMessage(currentMessage.text)
      }

      if (current >= 100) {
        clearInterval(interval)
        setTimeout(() => {
          navigate('/vault-success')
        }, 1200)
      }
    }, 45)

    return () => clearInterval(interval)
  }, [navigate])

  return (
    <div className="sv-loading-vault-page">
      <div className="sv-loading-vault-content">
        <div className="sv-loading-vault-logo">
          <img src={logo} alt="ScraaVult" />
          <h1>ScraaVult</h1>
          <p>Creating Your Secure Bitcoin Vault</p>
        </div>

        <div className="sv-loading-vault-progress">
          <div
            className="sv-loading-vault-progress-fill"
            style={{ width: `${progress}%` }}
          />
        </div>

        <h2>{progress}%</h2>
        <p>{message}</p>
      </div>
    </div>
  )
}

export default LoadingVault
