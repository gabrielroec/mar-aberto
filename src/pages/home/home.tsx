import "./style.scss";
import { Introduction } from "./introduction/introduction";
import { Sobre } from "./sobre/sobre";
import { Midbar } from "../../components/midbar/midbar";
import { Ratings } from "./ratings/ratings";
import { auth } from "../../services/autorization";
import VitrineHome from "../../components/vitrine-home/vitrineHome";
export function Home() {
  return (
    <div className="home-container">
      <Introduction />
      <VitrineHome />
      <Ratings />
      <Sobre />
    </div>
  );
}
