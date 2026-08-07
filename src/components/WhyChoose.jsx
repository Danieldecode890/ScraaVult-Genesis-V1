import "../styles/WhyChoose.css";
import "../styles/Responsive.css";

function WhyChoose() {
  const features = [
    {
      icon: "🛡️",
      title: "Self-Custody",
      text: "Your private keys remain yours. Always.",
    },
    {
      icon: "🔒",
      title: "Privacy First",
      text: "Built to protect your identity and your data.",
    },
    {
      icon: "⚡",
      title: "Fast Access",
      text: "Secure access whenever you need your vault.",
    },
    {
      icon: "📱",
      title: "Multi-Device",
      text: "Designed for desktop, tablet and mobile.",
    },
    {
      icon: "🌍",
      title: "Built for Everyone",
      text: "Simple for beginners. Powerful for experts.",
    },
    {
      icon: "💎",
      title: "Vault Design",
      text: "Inspired by physical vaults with a modern digital experience.",
    },
  ];

  return (
    <section className="why-choose">
      <span className="section-tag">
        WHY SCRAAVULT
      </span>

      <h2>
        Everything Built Around
        <br />
        Privacy & Security
      </h2>

      <p className="why-text">
        Every feature inside ScraaVult exists for one reason:
        keeping your Bitcoin secure while giving you complete
        ownership and confidence.
      </p>

      <div className="feature-grid">
        {features.map((item, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">
              {item.icon}
            </div>

            <h3>{item.title}</h3>

            <p>{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChoose;