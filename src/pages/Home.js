import style from "../styles/modules/home.module.css";
import Header from "../components/Header";
import Banniere from "../components/Banniere";
import CardList from "../components/Gallery";
import Footer from "../components/Footer";
import banniereImg from "../assets/banniere.svg";
import background from "../assets/Background.svg";

function Home() {
  return (
    <div className={style.home}>
      <Header />
      <Banniere img={banniereImg} background={background} displayText={true} />
      <CardList />
      <Footer />
    </div>
  );
}
export default Home;
