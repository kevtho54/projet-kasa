import style from "../styles/modules/banniere.module.css";

function Banniere(props) {
  return (
    <div className={style.contener_banniere}>
      <img
        className={style.background}
        src={props.background}
        alt="background de banniere"
      />
      <img
        className={style.banniere}
        src={props.img}
        alt="arrière plan de bannière"
      />
      {props.displayText && (
        <p className={style.txt_banniere}>Chez vous, partout et ailleurs</p>
      )}{" "}
      {/* && me permet d'affiché oui ou non la la props.displayText*/}
    </div>
  );
}
export default Banniere;
