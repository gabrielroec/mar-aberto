import "./style.scss";
import { IExperiencia } from "../../models/experiencia";
import BlackStarIcon from "../../misc/icons/star-full-black.svg";
import { ChangeEvent, useState } from "react";
import moment, { duration } from "moment";

interface ICardReservaProps {
  content: IExperiencia;
  show: (params: any) => void;
}

export function CardReserva(props: ICardReservaProps) {
  const content = props.content;

  const [quantidadePessoas, setQuantidadePessoas] = useState(1);
  const [dataInicio, setDataInicio] = useState(
    moment(Date.now()).format("YYYY-MM-DD")
  );
  const [dataFinal, setDataFinal] = useState(
    moment(Date.now()).add(1, "days").format("YYYY-MM-DD")
  );

  const selectHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setQuantidadePessoas(Number.parseInt(event.target.value));
  };

  const dataInicialHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const date = moment(new Date(event.target.value))
      .utc()
      .format("YYYY-MM-DD");
    setDataInicio(date);
  };

  const dataFinalHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const date = moment(new Date(event.target.value))
      .utc()
      .format("YYYY-MM-DD");
    setDataFinal(date);
  };

  const numeroDias = (): number => {
    const dayDiff = moment(dataFinal).diff(moment(dataInicio), "days");
    if (dayDiff === 0) {
      return 1;
    }
    return dayDiff;
  };

  const valorTotal = (): number => {
    return content.preco * numeroDias() * quantidadePessoas;
  };

  return (
    <div className="card-reserva">
      <div className="header">
        <span className="destaque medium-grey">
          <b className="bold">{`R$${content.preco}`}</b> por pessoa
        </span>
        <div className="avaliacoes">
          <span>
            <img draggable="false" src={BlackStarIcon} alt="" />
            <span>{content.rating}</span>
          </span>
          -
          <span className="medium-grey">{`${content.quantidadeAvaliacoes} Avaliações`}</span>
        </div>
      </div>
      <div className="inputs-container">
        <div className="input" id="inicio">
          <label htmlFor="">Data de início</label>
          <input
            id="inicio"
            type="date"
            name=""
            value={dataInicio}
            onChange={(event) => dataInicialHandler(event)}
          />
        </div>
        <div className="input" id="final">
          <label htmlFor="final">Data final</label>
          <input
            id="final"
            type="date"
            name="final"
            value={dataFinal}
            onChange={(event) => dataFinalHandler(event)}
          />
        </div>
        <div className="input" id="quantidade-pessoas">
          <label htmlFor="quantidade-pessoas">Quantidade de pessoas</label>
          <select
            name="select"
            value={quantidadePessoas}
            onChange={(event) => selectHandler(event)}
          >
            <option value="1">1 pessoa</option>
            <option value="2">2 pessoas</option>
            <option value="1">3 Pessoas</option>
            <option value="4">4 Pessoas</option>
            <option value="5">5 Pessoas</option>
            <option value="6">6 Pessoas</option>
            <option value="7">7 Pessoas</option>
            <option value="8">8 Pessoas</option>
          </select>
        </div>
      </div>
      <button className="blue-button" onClick={props.show}>
        Reservar
      </button>
      <div className="checkout-info">
        <div>Você não será cobrado agora</div>
        <div className="info">
          <div className="medium-grey">
            <span>{`R$${content.preco} x ${quantidadePessoas} pessoas`}</span>
            <span>{`R$${content.preco * quantidadePessoas}`}</span>
          </div>
          <div className="medium-grey">
            <span>{`R$${content.preco} x ${numeroDias()} dias`}</span>
            <span>{`R$${content.preco * numeroDias()}`}</span>
          </div>
          <div className="medium-grey">
            <span>Taxas</span>
            <span>R$0,00</span>
          </div>
          <div className="line"></div>
          <div>
            <span>Total</span>
            <span>{`R$${valorTotal()}`}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
