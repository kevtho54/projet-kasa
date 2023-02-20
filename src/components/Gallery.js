import style from "../styles/modules/gallery.module.css";
import logements from "../logements.json";
import { Link } from "react-router-dom";

export function Gallery({ cover, title, id }) {
  return (
    <div className={style.cardList}>
      <Link to={`/fiche_logements/${id}`}>
        <img className={style.cover} src={cover} alt={title} />
        <p className={style.card_title}>{title}</p>
        <div className={style.gradient}></div>
      </Link>
    </div>
  );
}

function CardList() {
  return (
    <div className={style.gallery}>
      {logements.map((logements) => (
        <Gallery
          key={logements.id}
          id={logements.id}
          title={logements.title}
          description={logements.description}
          cover={logements.cover}
        />
      ))}
    </div>
  );
}

export default CardList;
