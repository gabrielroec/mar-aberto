import { IAvaliacao } from "../../../models/avaliacao";
import "./avaliacao.scss";

interface IAvaliacaoProps {
  comentario: IAvaliacao;
}

export function Avaliacao(props: IAvaliacaoProps) {
  const comentario = props.comentario;
  return (
    <div className="avaliacao medium-grey">
      <div className="header">
        <img
          src="https://drive.google.com/uc?export=view&id=1oMdu_WG1FStcKkkef7zKkDoIZS6u77Uh"
          alt=""
        />
        <div className="info">
          <span className="black">{comentario.nomeAvaliador}</span>
          <span className="small">{comentario.dataAvaliacao}</span>
        </div>
      </div>
      <div className="descricao-container">
        <div className="light">{comentario.comentario}</div>
      </div>
    </div>
  );
}
