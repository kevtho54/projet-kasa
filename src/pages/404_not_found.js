import { Link } from "react-router-dom"; // j'importe Link depuis react-router
import style from "../styles/modules/404_Not_found.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

function NotFound() {
  return (
    <div className={style.NotFound}>
      <Header />
      <h1 className={style.h1}>404</h1>
      <p className={style.txt}>Oups! La page que vous demandez n'existe pas.</p>

      <Link className={style.link_home} to="/home">
        Retourner sur la page d'accueil
      </Link>
      <Footer />
    </div>
  );
}
export default NotFound;
