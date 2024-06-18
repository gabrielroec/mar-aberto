import "./style.scss";
import Star from "../../misc/icons/star-full-black.svg";
import { IExperiencia } from "../../models/experiencia";
interface IResultCardProps {
  content: IExperiencia;
}

export function ResultCard(props: IResultCardProps) {
  let content = props.content;
  return (
    <div className="result-card">
      <img draggable="false" src={content.image} alt="" />
      <div className="content">
        <div className="info">
          <div className="header">
            <div className="bold">{`${content.regiao}, ${content.cidade}`}</div>
            <div className="rating">
              <img draggable="false" src={Star} alt="" />
              <div>{content.rating}</div>
            </div>
          </div>
          <div className="light medium-grey description">{content.description}</div>
        </div>
        <div className="action">
          <div>
            <b>{`R$${content.preco}`}</b> por pessoa
          </div>
          <a className="light" href={`/experiencia/${content.id}/detalhes`}>
            Agendar
          </a>
        </div>
      </div>
    </div>
  );
}
