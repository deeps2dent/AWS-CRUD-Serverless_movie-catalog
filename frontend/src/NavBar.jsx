import { NavLink } from "react-router-dom";
import { useAuth } from "react-oidc-context";

export default function NavBar() {
const auth = useAuth();

  return (
    <nav className="navbar">
      <h2 className="logo">My Movie Catalog</h2>
      <div className="links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/add">Add Movie</NavLink>
       {auth.isAuthenticated && (
         <button className="nav-button" onClick={() => auth.removeUser()}>
           Sign Out
         </button>
       )}
      </div>
    </nav>
  );
}
