import "./style.scss";
import { ResultCard } from "../../../components/result-card/result-card";
import { IExperiencia } from "../../../models/experiencia";

interface IResult {
  result: IExperiencia[];
}

export function Result(props: IResult) {
  let content = props.result;
  return (
    <section className="result-container">
      <h2>{`${content.length} Resultados encontrados`}</h2>
      <div className="results">
        {content.map((item) => {
          return <ResultCard content={item} />;
        })}
      </div>
    </section>
  );
}
