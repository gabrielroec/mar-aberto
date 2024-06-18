import "./style.scss";
import { Introduction } from "./introduction/introduction";
import { Parceiros } from "./parceiros/parceiros";
import { Mapa } from "./mapa/mapa";
import { content } from "./content";
import { ConhecaHistorias } from "./conheca-historias/conheca-historias";

export function HomeMarSocial() {
  const response = content;

  return (
    <section className="marsocial-home-section">
      <Introduction />
      <Mapa content={response} />
      <ConhecaHistorias />
      <Parceiros />
    </section>
  );
}
