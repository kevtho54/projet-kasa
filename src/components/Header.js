import { NavLink } from "react-router-dom"; // j'importe Link depuis react-router
import logokasa from "../assets/LOGOKasa.svg"; // j'importe mon logo
import style from "../styles/modules/header.module.css"; // J'importe mon module css header pour l'utiliser

function Header() {
  return (
    <header className={style.header}>
      <img className={style.LOGO} src={logokasa} alt="LOGOKasa.svg" />

      <nav className={style.nav}>
        <NavLink
          to="/home"
          className={({ isActive }) =>
            isActive ? style.active : style.link_home
          }
        >
          Accueil
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? style.active : style.link_about
          }
        >
          A propos
        </NavLink>
      </nav>
    </header>
  );
}
export default Header;
