import "./styles.scss";
import { MaisProcurados } from "../busca/mais-procuradas/mais-procurada";
import { Experiencia } from "./detalhes/experiencia";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { results } from "../busca/content";
import { IExperiencia } from "../../models/experiencia";
import { Avaliacoes } from "../../components/avaliacoes/avaliacoes";

export function DetalhesExperiencia() {
  const { id } = useParams();
  const [content, setContent] = useState<IExperiencia>();

  useEffect(() => {
    getContent(id);
  });

  const getContent = (id?: string) => {
    if (id === undefined) return null;
    setContent(results.filter((item) => item.id === Number.parseInt(id))[0]);
  };

  return content ? (
    <section className="detalhes-experiencia-section">
      <Experiencia content={content} />
      <Avaliacoes experiencia={content} />
      <MaisProcurados />
    </section>
  ) : (
    <></>
  );
}
