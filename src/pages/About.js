import Header from "../components/Header";
import Footer from "../components/Footer";
import Banniere from "../components/Banniere";
import style from "../styles/modules/about.module.css";
import banniereImg from "../assets/banniere_about.webp";
import background from "../assets/Background_about.svg";

import Collapse from "../components/Collapse";

function About() {
  return (
    <div className="About">
      <Header />
      <div className={style.test}>
        <Banniere
          img={banniereImg}
          background={background}
          displayText={false}
        />
      </div>
      <div className={style.contener}>
        <div className="contener_dropdown">
          <Collapse
            title="Fiabilité"
            text="Les annonces postées sur Kasa garantissent une fiabilité totale.
              Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."
          />
        </div>

        <div>
          <Collapse
            title="Respect"
            text="La bienveillance fait partie des valeurs fondatrices de Kasa.
            Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
        </div>

        <div>
          <Collapse
            title="Service"
            text="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.
          N'hésitez pas à nous contacter si vous avez la moindre question."
          />
        </div>

        <div>
          <Collapse
            title="Sécurité"
            text="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
          chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. 
          Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
