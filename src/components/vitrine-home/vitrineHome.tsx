import React, { useEffect, useState } from "react";
import "./style.scss";
import { getPasseiosList } from "../../services/passeios";
import axios from "axios";
import { Link } from "react-router-dom";

interface Passeio {
  id: number;
  nome: string;
  url: string;
  descricao: string;
  foto: {
    miniatura: string;
    original: string;
  };
  preco_exibicao: number;
  destino_id: string;
  tipo_atividade: string;
}

const VitrineHome = () => {
  const [passeios, setPasseios] = useState<Passeio[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getPasseiosList();
        if (Array.isArray(data.itens)) {
          setPasseios(data.itens);
        } else {
          console.error("Dados da API não são uma matriz:", data);
        }
      } catch (error) {
        console.error("Erro ao buscar passeios:", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="container">
      <div className="shelf-title">
        Experiências imperdíveis você só encontra na Mar Aberto!
      </div>

      <div className="passeios-list">
        {passeios.map((el) => (
          <PasseioCard key={el.id} passeio={el} />
        ))}
      </div>
    </div>
  );
};

interface PasseioCardProps {
  passeio: Passeio;
}

const PasseioCard: React.FC<PasseioCardProps> = ({ passeio }) => {
  const [destinoData, setDestinoData] = useState<any>(null);

  useEffect(() => {
    async function getLocationId(destino_id: string) {
      try {
        const url = `https://api.paytour.com.br/v2/destinos/${destino_id}`;
        const response = await axios.get(url);
        setDestinoData(response.data);
      } catch (error) {
        console.error("Erro ao obter dados do destino:", error);
        throw error;
      }
    }

    getLocationId(passeio.destino_id);
  }, [passeio]);

  return (
    <div className="passeio-card">
      <div className="passeio-thumb">
        <div className="passeio-type">
          {passeio.tipo_atividade.charAt(0).toUpperCase() +
            passeio.tipo_atividade.slice(1)}
        </div>

        <img src={passeio.foto.original} alt="" />
      </div>
      <div className="passeio-nome">{passeio.nome}</div>
      <div className="passeio-destino">
        <div className="cidade">{destinoData?.cidade}</div>
        <div className="estado">{destinoData?.estado}</div>
      </div>
      <p className="passeio-price">
        <span>A partir de</span>{" "}
        <span className="price">R${passeio.preco_exibicao.toFixed(2)}</span>
      </p>
      <a href={passeio.url} className="buy-now">
        Agendar passeio
      </a>
    </div>
  );
};

export default VitrineHome;
