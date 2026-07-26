import { Link } from "react-router-dom";
function Navbar({ theme, toggleTheme }) 
{
  return (
    <nav>
      <h2>
        <span className="logo-dot"></span> 
        ScraaVult
        </h2>

      <div>
        <Link to="/">
        <button>Home</button>
           </Link>

        </div>
     <button onClick={toggleTheme}
        >
         {theme === "dark"
        ? "☀️ Theme"
        : "🌙 Theme"}
     </button>
    </nav>
  );
}

export default Navbar;