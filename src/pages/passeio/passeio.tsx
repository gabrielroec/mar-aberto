import React from "react";
import { useParams } from "react-router-dom";

const DetalhesPasseio = () => {
  const { id } = useParams();

  // Aqui você pode usar o ID para buscar os detalhes do passeio correspondente
  // e renderizar a página de detalhes do passeio

  return (
    <div>
      {" "}
      <h2>Detalhes do Passeio {id}</h2>
    </div>
  );
};

export default DetalhesPasseio;
