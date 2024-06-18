import "./style.scss";
import { IExperiencia } from "../../models/experiencia";
import BlackStarIcon from "../../misc/icons/star-full-black.svg";

interface ICardReservaProps {
  content: IExperiencia;
}

export function CardContato(props: ICardReservaProps) {
  const content = props.content;
  return (
    <div className="card-contato">
      <div className="header">
        <h2>Contato</h2>
        <div className="avaliacoes">
          <span>
            <img draggable="false" src={BlackStarIcon} alt="" />
            <span>{content.rating}</span>
          </span>
          -
          <span className="medium-grey">{`${content.quantidadeAvaliacoes} Avaliações`}</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="info">
        <div>
          <span>Telefone</span>
          <span>+55 {content?.telefone ? content.telefone : "96932-1284"}</span>
        </div>
        <div>
          <span>Endereço</span>
          <span>Rua do Campeche</span>
        </div>
      </div>
      <div className="line"></div>
      <div className="acao">
        <a href="">Clique para abrir no seu app de navagação favorito</a>
        <a className="blue-button" href="tel:+1-303-499-7111">
          Ligar agora
        </a>
      </div>
    </div>
  );
}
