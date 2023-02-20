import style from "../styles/modules/rating.module.css";

function Rating(props) {
  const { logement } = props;

  return (
    <div className={style.rating}>
      {[1, 2, 3, 4, 5].map((number) => (
        <span
          key={number}
          className={`${logement.rating >= number ? style.stars_color : ""}`} // si la note du logement est supérieure ou égale au nombre de l'étoile à affichées, alors on applique style.stars_color, le rest reste par defaut
        >
          &#9733;
        </span>
      ))}
    </div>
  );
}
export default Rating;
