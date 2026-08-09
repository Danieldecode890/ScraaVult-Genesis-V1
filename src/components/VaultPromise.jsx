import { FiLock, FiShield, FiCheckCircle } from 'react-icons/fi'
import './SectionCards.css'

function VaultPromise() {
  const promises = [
    {
      icon: <FiLock />,
      title: 'Privacy',
      text: 'Your information belongs to you. Always.',
    },
    {
      icon: <FiShield />,
      title: 'Security',
      text: 'Protection comes before convenience.',
    },
    {
      icon: <FiCheckCircle />,
      title: 'Confidence',
      text: 'Every interaction should inspire trust.',
    },
  ]

  return (
    <section className="sv-section sv-promise">
      <span className="sv-eyebrow">Our Promise</span>
      <h2 className="sv-heading">
        Built on Three
        <br />
        Non-Negotiable Principles
      </h2>
      <p className="sv-description">
        At ScraaVult, we believe your Bitcoin should always remain under your
        control. Every feature we design follows three principles that define
        who we are.
      </p>

      <div className="sv-promise-grid">
        {promises.map((item, i) => (
          <div className="sv-promise-card" key={i}>
            <div className="sv-card-accent" />
            <div className="sv-card-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default VaultPromise
