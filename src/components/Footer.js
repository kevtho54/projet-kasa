import logo from "../assets/LOGOfooter.svg";
import style from "../styles/modules/footer.module.css";

function Footer() {
  return (
    <footer className={style.footer}>
      <div className={style.contener_footer}>
        <div className={style.contener_logo}>
          <img className={style.logofooter} src={logo} alt="Logo casa" />
        </div>
        <p className={style.txt}>© 2020 Kasa. All Rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
