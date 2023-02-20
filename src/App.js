import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import NotFound from "./pages/404_not_found";
import FicheLogements from "./pages/Fiche_logement";

function App() {
  return (
    <Router>
      <div className="router">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="home/" element={<Home />} />
          <Route path="about/" element={<About />} />
          <Route path="fiche_logements/:id" element={<FicheLogements />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* le * signifie que cette
          route s'affichera si il y a une erreur dans l'url*/}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
