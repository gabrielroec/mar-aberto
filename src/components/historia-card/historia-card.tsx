import { IHistoriaCard } from "../../pages/marsocial/home/conheca-historias/content";
import "./style.scss";

interface IHistoriaCardProps {
  cardContent: IHistoriaCard;
}

export function HistoriaCard(props: IHistoriaCardProps) {
  let content = props.cardContent;

  return (
    <div className="historia-card">
      <img draggable="false" src={content.pfp} alt="" />
      <div className="content">
        <div className="info">
          <span className="bold">{content.name}</span>
          <div>{content.description}</div>
        </div>
        <a className="small" href={`/marsocial/${content.id}/detalhes`}>
          Conheça a história
        </a>
      </div>
    </div>
  );
}
