import "./style.scss";
import { IExperiencia } from "../../../../models/experiencia";
import BlackStar from "../../../../misc/icons/star-full-black.svg";
import { CardDestaque } from "../../../detalhes-experiencia/card-destaque/card-destaque";
import { CardContato } from "../../../../components/card-contato/card-contato";
import Placeholder from "../../../../misc/placeholder/placeholder.png";

interface IExperienciaProps {
  content: IExperiencia;
}

export function Experiencia(props: IExperienciaProps) {
  const response: IExperiencia = props.content;
  return (
    <section className="experiencia-section">
      <header className="light">
        <h2 className="light">{response.nome}</h2>
        <div className="info">
          <span>
            <img draggable="false" src={BlackStar} alt="" />
            <span>{response.rating}</span>
          </span>
          -<span>{`${response.quantidadeAvaliacoes} Avaliações`}</span>-
          <span>
            <b>{`${response.regiao}, ${response.cidade}`}</b>
          </span>
        </div>
      </header>
      <div className="image-gallery">
        <img draggable="false" className="main-img" src={response.image} alt="" />
        <div className="side-container">
          <p className="light">
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
          <CardContato content={response} />
        </div>
        <div className="long-description">{response.longDescription}</div>
      </div>
    </section>
  );
}
