import { FiCheckCircle, FiLock, FiShield } from 'react-icons/fi'
import '../styles/AccountPages.css'
import '../styles/Notification.css'

function Notifications() {
  return (
    <div className="sv-notifications-page">
      <div className="sv-notifications-header">
        <div>
          <span className="sv-eyebrow">Vault activity</span>
          <h1 className="sv-notifications-title">Notification Center</h1>
          <p className="sv-notifications-subtitle">
            Stay informed about every activity in your ScraaVult.
          </p>
        </div>
        <div className="sv-notifications-status">
          <span className="sv-status-dot" />
          Live
        </div>
      </div>

      <section className="sv-notifications-card">
        <article className="sv-notification-item sv-notification-item--success">
          <div className="sv-notification-icon"><FiCheckCircle /></div>
          <div className="sv-notification-content">
            <h2>Deposit Confirmed</h2>
            <p>0.005 BTC has been received successfully.</p>
            <small>2 minutes ago</small>
          </div>
        </article>

        <div className="sv-notification-divider" />

        <article className="sv-notification-item sv-notification-item--info">
          <div className="sv-notification-icon"><FiShield /></div>
          <div className="sv-notification-content">
            <h2>Trusted Login</h2>
            <p>Your vault was accessed from a trusted device.</p>
            <small>Today · 8:35 PM</small>
          </div>
        </article>

        <div className="sv-notification-divider" />

        <article className="sv-notification-item sv-notification-item--warning">
          <div className="sv-notification-icon"><FiLock /></div>
          <div className="sv-notification-content">
            <h2>Security Update</h2>
            <p>Identity verification is active and protecting your vault.</p>
            <small>Yesterday</small>
          </div>
        </article>
      </section>
    </div>
  )
}

export default Notifications
