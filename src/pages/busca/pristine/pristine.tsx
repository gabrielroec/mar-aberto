import Lottie from "lottie-react";
import "./style.scss";
import searchingAnimation from "../../../misc/animations/seraching-animation.json";

export function Pristine() {
  return (
    <div className="pristine-container">
      <h1>Busque por sua próxima experiência inesquecível</h1>
      <Lottie animationData={searchingAnimation} height="10%" width="10%" />
    </div>
  );
}
