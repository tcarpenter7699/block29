import { Link } from "react-router-dom";
import PetsIcon from "@mui/icons-material/Pets";

export default function Nav() {
  return (
    <nav id="nav">
      <div id="icon">
        <PetsIcon />
      </div>
      <Link to="/" className="links">
        HOME
      </Link>
      <Link to="/add-player" className="links">
        ADD PLAYER
      </Link>
    </nav>
  );
}