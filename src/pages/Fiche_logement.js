import Header from "../components/Header";
import style from "../styles/modules/fiche_logement.module.css";
import { Carrousel } from "../components/Carrousel";
import LogementDetails from "../components/Logement_detail";
import Tags from "../components/tags";
import Users from "../components/Users";
import Rating from "../components/rating";
import Collapse from "../components/Collapse";
import logements from "../logements.json";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../components/Footer";
import NotFound from "./404_not_found";

function FicheLogements() {
  const navigate = useNavigate();
  const { id } = useParams();
  const logement = logements.find((logement) => logement.id === id);

  // Vérifie si l'ID est valide
  if (!logement) {
    // Redirige vers la page 404 personnalisée si l'ID n'est pas valide
    navigate("/not-found", { replace: true });
    return <NotFound />;
  }

  return (
    <div className="fiche_logement">
      <Header />
      <Carrousel logement={logement} />

      <section className={style.contener_details}>
        <div className={style.contener_title}>
          <LogementDetails logement={logement} />
          <Tags logement={logement} />
        </div>
        <div className={style.contener_user_stars}>
          <Users logement={logement} />
          <Rating logement={logement} />
        </div>
      </section>

      <section className={style.contener_collapse}>
        <div className={style.description}>
          <Collapse
            title="Déscription"
            text={
              <p className={style.txt_description}>{logement.description}</p>
            }
          />
        </div>
        <div className={style.equipements}>
          <Collapse
            title="Equipements"
            text={logement.equipments.map((equipments, index) => (
              <p key={index} className={style.txt_equipements}>
                {equipments}
              </p>
            ))}
          />
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FicheLogements;
