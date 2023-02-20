import style from "../styles/modules/tags.module.css";

function Tags(props) {
  const { logement } = props;

  return (
    <div className={style.contener_tags}>
      {logement.tags.map((tag, index) => (
        <p key={index} className={style.tags}>
          {tag}
        </p>
      ))}
    </div>
  );
}

export default Tags;
