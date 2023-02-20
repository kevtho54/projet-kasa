import style from "../styles/modules/users.module.css";
function Users(props) {
  const { logement } = props;

  return (
    <div className={style.contener_user}>
      <p className={style.name}>{logement.host.name}</p>
      <img
        className={style.img_user}
        src={logement.host.picture}
        alt={logement.host.name}
      />
    </div>
  );
}
export default Users;
