import "../styles/VaultAnimation.css";

function VaultSVG({ stage }) {
  return (
    <svg
      className="vault-svg"
      width="500"
      height="500"
      viewBox="0 0 500 500"
    >

      <defs>

        <linearGradient
          id="steelGradient"
          x1="0%"
          y1="0%"
          x2="100%"
          y2="100%"
        >
          <stop offset="0%" stopColor="#f5f5f5" />
          <stop offset="20%" stopColor="#cfcfcf" />
          <stop offset="50%" stopColor="#666666" />
          <stop offset="80%" stopColor="#d9d9d9" />
          <stop offset="100%" stopColor="#ffffff" />
        </linearGradient>

      </defs>

      {/* Vault Frame */}

      <rect
        x="40"
        y="40"
        width="420"
        height="420"
        rx="22"
        className="vault-frame"
      />

      {/* Door Seam */}

      <line
        x1="250"
        y1="55"
        x2="250"
        y2="445"
        className="door-seam"
      />

      {/* Left Door */}

      <rect
        x="55"
        y="55"
        width="190"
        height="390"
        rx="18"
        className={
          stage >= 3
            ? "left-door open"
            : "left-door"
        }
      />

      {/* Right Door */}

      <rect
        x="255"
        y="55"
        width="190"
        height="390"
        rx="18"
        className={
          stage >= 3
            ? "right-door open"
            : "right-door"
        }
      />

      {/* Glow */}

      <rect
        x="55"
        y="55"
        width="390"
        height="390"
        className={
          stage >= 4
            ? "vault-light visible"
            : "vault-light"
        }
      />

      {/* Vault Wheel */}

      <g
        className={
          stage >= 2
            ? "vault-wheel spinning"
            : "vault-wheel"
        }
      >

        {/* Outer Ring */}

        <circle
          cx="250"
          cy="250"
          r="90"
          className="wheel-ring"
        />

        {/* Inner Ring */}

        <circle
          cx="250"
          cy="250"
          r="45"
          className="wheel-inner"
        />

        {/* Wheel Spokes */}

        <line x1="250" y1="170" x2="250" y2="330" className="wheel-spoke"/>

        <line x1="170" y1="250" x2="330" y2="250" className="wheel-spoke"/>

        <line x1="194" y1="194" x2="306" y2="306" className="wheel-spoke"/>

        <line x1="306" y1="194" x2="194" y2="306" className="wheel-spoke"/>

        {/* Center Cap */}

        <circle
          cx="250"
          cy="250"
          r="18"
          className="wheel-center"
        />

      </g>

      {/* Security Bolts */}

      <circle cx="120" cy="65" r="7" className="vault-bolt"/>
      <circle cx="250" cy="65" r="7" className="vault-bolt"/>
      <circle cx="380" cy="65" r="7" className="vault-bolt"/>

      <circle cx="120" cy="435" r="7" className="vault-bolt"/>
      <circle cx="250" cy="435" r="7" className="vault-bolt"/>
      <circle cx="380" cy="435" r="7" className="vault-bolt"/>

      <circle cx="65" cy="170" r="7" className="vault-bolt"/>
      <circle cx="65" cy="330" r="7" className="vault-bolt"/>

      <circle cx="435" cy="170" r="7" className="vault-bolt"/>
      <circle cx="435" cy="330" r="7" className="vault-bolt"/>
         
          {/* Light Rays */}

{stage >= 4 && (

<g className="light-rays">

    <line x1="250" y1="250" x2="250" y2="70" className="light-ray"/>

    <line x1="250" y1="250" x2="180" y2="90" className="light-ray"/>

    <line x1="250" y1="250" x2="320" y2="90" className="light-ray"/>

    <line x1="250" y1="250" x2="140" y2="160" className="light-ray"/>

    <line x1="250" y1="250" x2="360" y2="160" className="light-ray"/>

</g>

)}

     {/* Bitcoin */}
      
      {stage >= 5 && (

        <text
          x="250"
          y="265"
          textAnchor="middle"
          className="bitcoin-logo"
        >
          ₿
        </text>

      )}

    </svg>

  );
}

export default VaultSVG;