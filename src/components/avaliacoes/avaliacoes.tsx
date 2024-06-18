import "./style.scss";
import { IExperiencia } from "../../models/experiencia";
import { Avaliacao } from "./avaliacao/avaliacao";

interface IAvaliacoesProps {
  experiencia: IExperiencia;
}

export function Avaliacoes(props: IAvaliacoesProps) {
  const experiencia = props.experiencia;
  return (
    <section className="avaliacoes-section">
      <h1 className="ocean-blue">Avaliações</h1>
      <div className="avaliacoes-container">
        {experiencia.avaliacoes.map((item) => {
          return <Avaliacao comentario={item} />;
        })}
      </div>
    </section>
  );
}
