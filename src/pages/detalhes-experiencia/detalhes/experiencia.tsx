import "./style.scss";
import "rodal/lib/rodal.css";
import { CardDestaque } from "../card-destaque/card-destaque";
import BlackStar from "../../../misc/icons/star-full-black.svg";
import Placeholder from "../../../misc/placeholder/placeholder.png";
import { CardReserva } from "../../../components/card-reserva/card-reserva";
import Rodal from "rodal";
import { useState } from "react";
import { ModalConfirmacao } from "../../../components/modal-confirmacao/modal-confirmacao";
import { ModalConfirmacaoSucesso } from "../../../components/modal-confirmacao-sucesso/modal-confirmacao-sucesso";
import { IExperiencia } from "../../../models/experiencia";

interface IExperienciaProps {
  content: IExperiencia;
}

export function Experiencia(content: IExperienciaProps) {
  const response = content.content;

  const [visibleConfirmation, setVisible] = useState(false);
  const [visibleSucess, setVisibleSucess] = useState(false);

  const show = () => {
    setVisible(true);
  };

  const hideConfirmation = () => {
    setVisible(false);
  };

  const hideSuccess = () => {
    setVisibleSucess(false);
  };

  return (
    <section className="experiencia-section">
      <header>
        <h2>{response.nome}</h2>
        <div className="info">
          <span className="rating">
            <img draggable="false" src={BlackStar} alt="" />
            <span>{response.rating}</span>
          </span>
          -<span>{`${response.quantidadeAvaliacoes} Avaliações`}</span>-
          <span>
            <b>{`${response.regiao}, ${response.cidade}`}</b>
          </span>
        </div>
        <Rodal
          visible={visibleConfirmation}
          onClose={hideConfirmation}
          customStyles={{ width: "fit-content", height: "fit-content" }}
        >
          <ModalConfirmacao
            hide={hideConfirmation}
            openSucess={setVisibleSucess}
          />
        </Rodal>
        <Rodal
          visible={visibleSucess}
          onClose={hideSuccess}
          customStyles={{ width: "fit-content", height: "fit-content" }}
        >
          <ModalConfirmacaoSucesso />
        </Rodal>
      </header>
      <div className="image-gallery">
        <img draggable="false" className="main-img" src={response.image} alt="" />
        <div className="side-container">
          <p>
            {response.description}
          </p>
        </div>
      </div>
      <div className="main">
        <header>
          <img
            draggable="false"
            className="profile-photo"
            src={response.profilePhoto ? response.profilePhoto : ""}
            alt=""
          />
          <div className="headings">
            <h2>{response.nomeDonoExperiencia}</h2>
            <div>{`${response.capacidadeMaxima} Pessoas`}</div>
          </div>
        </header>
        <div className="info">
          <div className="destaques-container">
            {response.destaques.map((item) => {
              return <CardDestaque content={item} />;
            })}
          </div>
          <CardReserva content={response} show={show} />
        </div>
        <div className="long-description"></div>
      </div>
    </section>
  );
}
