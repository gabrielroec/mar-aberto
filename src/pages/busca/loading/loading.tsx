import "./style.scss";
import Lottie from "lottie-react";
import loadingAnimation from "../../../misc/animations/loadingAnimation.json";

export function Loading() {
  return (
    <div className="loading">
      <Lottie animationData={loadingAnimation} height={40} width={40} />
    </div>
  );
}
