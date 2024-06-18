import { useParams } from "react-router-dom";
import { MaisProcurados } from "../../busca/mais-procuradas/mais-procurada";
import { Experiencia } from "./experiencia/experiencia";
import "./style.scss";
import { useEffect, useState } from "react";
import { results } from "../../busca/content";
import { IExperiencia } from "../../../models/experiencia";
import { Avaliacoes } from "../../../components/avaliacoes/avaliacoes";

export function DetalhesExperienciaMarSocial() {
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
    <section className="marsocial-detalhes-experiencia-section">
      <Experiencia content={content} />
      <Avaliacoes experiencia={content} />
    </section>
  ) : (
    <></>
  );
}
