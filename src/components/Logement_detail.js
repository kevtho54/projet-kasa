import style from "../styles/modules/logement_details.module.css";

function LogementDetails(props) {
  const { logement } = props;
  return (
    <div className={style.contener_details}>
      <h1 className={style.title}>{logement.title}</h1>
      <p className={style.location}> {logement.location}</p>
    </div>
  );
}
export default LogementDetails;
