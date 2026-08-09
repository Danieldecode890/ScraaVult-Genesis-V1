import {
  FiShield,
  FiLock,
  FiZap,
  FiSmartphone,
  FiGlobe,
  FiAward,
} from 'react-icons/fi'
import './SectionCards.css'

function WhyChoose() {
  const features = [
    { icon: <FiShield />, title: 'Self-Custody', text: 'Your private keys remain yours. Always.' },
    { icon: <FiLock />, title: 'Privacy First', text: 'Built to protect your identity and your data.' },
    { icon: <FiZap />, title: 'Fast Access', text: 'Secure access whenever you need your vault.' },
    { icon: <FiSmartphone />, title: 'Multi-Device', text: 'Designed for desktop, tablet and mobile.' },
    { icon: <FiGlobe />, title: 'Built for Everyone', text: 'Simple for beginners. Powerful for experts.' },
    { icon: <FiAward />, title: 'Vault Design', text: 'Inspired by physical vaults with a modern digital experience.' },
  ]

  return (
    <section className="sv-section sv-why">
      <span className="sv-eyebrow">Why ScraaVult</span>
      <h2 className="sv-heading">
        Everything Built Around
        <br />
        Privacy &amp; Security
      </h2>
      <p className="sv-description">
        Every feature inside ScraaVult exists for one reason: keeping your
        Bitcoin secure while giving you complete ownership and confidence.
      </p>

      <div className="sv-feature-grid">
        {features.map((item, i) => (
          <div className="sv-feature-card" key={i}>
            <div className="sv-feature-icon">{item.icon}</div>
            <div className="sv-feature-body">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default WhyChoose
