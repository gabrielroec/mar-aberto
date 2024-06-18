import "./style.scss";
import SuccessIcon from "../../misc/icons/success-icon.svg";
import { Resumo } from "../resumo/resumo";

export function ModalConfirmacaoSucesso() {
  return (
    <div className="modal-confirmacao-sucesso">
      <div className="info-geral">
        <div className="header">
          <img draggable="false" src={SuccessIcon} alt="" />
          <h1>Sua experiência está confirmada!</h1>
        </div>
        <div className="medium-grey">
          Sua experiência está confirmada para os dias 13/05/2023 a 14/05/2023.
        </div>
        <div className="medium-grey">
          Aguarde a confirmação desta reserva em seu email ou por mensagem de
          texto.
        </div>
        <div className="medium-grey">
          Caso precise, você pode falar com Passeio de Catamarã pelos contatos
          abaixo:
        </div>
        <div className="medium-grey contato-experiencia">
          <span>Passeios de Catamarã - Campeche</span>
          <span>048 91234 5678</span>
        </div>
        <div className="line"></div>
        <div className="medium-grey">
          Clique no botão abaixo para abrir a localização da experiência no seu
          app de navegação favorito!
        </div>
        <button className="blue-button">Me leve à meu passeio!</button>
      </div>
      <div className="line"></div>
      <Resumo />
    </div>
  );
}
