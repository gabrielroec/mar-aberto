import { Options } from "./options";
import "./style.scss";

export function Midbar() {
  let options = Options;

  return (
    <section className="midbar">
      <p className="light">Que tipo de passeio está procurando?</p>
      <div className="options-container">
        {options.map((item) => {
          return (
            <a className="option" href={item.link}>
              <img draggable="false" src={item.icon} alt="" />
              {item.label}
            </a>
          );
        })}
        <a></a>
      </div>
    </section>
  );
}
