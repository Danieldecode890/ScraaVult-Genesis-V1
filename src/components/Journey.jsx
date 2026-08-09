import { FiShield, FiKey, FiBarChart2, FiTrendingUp } from 'react-icons/fi'
import './Journey.css'

function Journey() {
  const steps = [
    { icon: <FiShield />, title: 'Create Your Vault', text: 'Generate your secure private vault in seconds.' },
    { icon: <FiKey />, title: 'Protect Your Bitcoin', text: 'Your private keys stay under your complete control.' },
    { icon: <FiBarChart2 />, title: 'Track Your Assets', text: 'Monitor balances and portfolio growth with ease.' },
    { icon: <FiTrendingUp />, title: 'Own Your Future', text: 'True financial freedom begins with ownership.' },
  ]

  return (
    <section className="sv-section sv-journey">
      <span className="sv-eyebrow">How It Works</span>
      <h2 className="sv-heading">Your Journey Begins Here</h2>
      <p className="sv-description">
        Four simple steps designed around privacy, ownership and confidence.
      </p>

      <div className="sv-journey-grid">
        {steps.map((step, i) => (
          <div className="sv-journey-step" key={i}>
            <div className="sv-journey-number">{i + 1}</div>
            <div className="sv-journey-card">
              <div className="sv-journey-icon">{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Journey
