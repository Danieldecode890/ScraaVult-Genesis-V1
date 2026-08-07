import "../styles/Responsive.css";
import "../styles/Journey.css"

function Journey() {
  const steps = [
    {
      icon: "🛡️",
      title: "Create Your Vault",
      text: "Generate your secure private vault in seconds."
    },
    {
      icon: "🔐",
      title: "Protect Your Bitcoin",
      text: "Your private keys stay under your complete control."
    },
    {
      icon: "📊",
      title: "Track Your Assets",
      text: "Monitor balances and portfolio growth with ease."
    },
    {
      icon: "🚀",
      title: "Own Your Future",
      text: "True financial freedom begins with ownership."
    }
  ];

  return (
    <section className="journey-section">

      <span className="section-tag">
        HOW IT WORKS
      </span>

      <h2>
        Your Journey Begins Here
      </h2>

      <p className="journey-text">
        Four simple steps designed around privacy,
        ownership and confidence.
      </p>

      <div className="journey-grid">

        {steps.map((step, index) => (

          <div
            className="journey-card"
            key={index}
          >

            <div className="journey-number">
              {index + 1}
            </div>

            <div className="journey-icon">
              {step.icon}
            </div>

            <h3>{step.title}</h3>

            <p>{step.text}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Journey;