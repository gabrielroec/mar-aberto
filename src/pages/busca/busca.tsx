import "./style.scss";
import SearchIcon from "../../misc/icons/map-pin.svg";
import VeleiroIcon from "../../misc/icons/veleiro-icon.svg";
import BarquinhoIcon from "../../misc/icons/barquinho-icon.svg";
import CalendarIcon from "../../misc/icons/calendar.svg";
import { Result } from "./result/result";
import { MaisProcurados } from "./mais-procuradas/mais-procurada";
import { ChangeEvent, useEffect, useState } from "react";
import { results } from "./content";
import { State } from "../../models/states";
import { IExperiencia } from "../../models/experiencia";
import { Loading } from "./loading/loading";
import { Pristine } from "./pristine/pristine";

export function Busca() {
  const [state, setState] = useState(State.PRISTINE);
  const [location, setLocation] = useState("");
  const [result, setResult] = useState<IExperiencia[]>([]);
  const searchParams = new URLSearchParams(document.location.search);

  useEffect(() => {
    let locationQueryParam = searchParams.get("location");
    console.log(locationQueryParam);
    if (locationQueryParam === null || locationQueryParam === "") {
      setState(State.PRISTINE);
      return;
    }
    Buscar(locationQueryParam);
  }, []);

  const submitBusca = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.preventDefault();
    Buscar(location);
  };

  const Buscar = async (query: string) => {
    if (query === null || query === "") {
      setState(State.PRISTINE);
      return;
    }
    query = query.trim();
    setState(State.LOADING);

    await setTimeout(() => {
      const result: IExperiencia[] = results.filter(
        (item) =>
          item.cidade.toLocaleLowerCase() === query.toLocaleLowerCase() ||
          item.regiao.toLocaleLowerCase() === query.toLocaleLowerCase()
      );

      setResult(result);
      setState(State.READY);
    }, 2000);
  };

  const locationHandler = (event: ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLocation(event.target.value);
  };

  const renderSwitch = () => {
    switch (state) {
      case State.LOADING:
        return <Loading />;
      case State.READY:
        return <Result result={result} />;
      default:
        return <Pristine />;
    }
  };

  return (
    <section className="busca-section">
      <section>
        <form action="">
          <div className="left-container">
            <div className="input-container">
              <img draggable="false" src={SearchIcon} alt="icone pesquisa" />
              <input
                type="text"
                placeholder="Local da próxima aventura?"
                onChange={(event) => locationHandler(event)}
              />
            </div>
            {/* <div className="checkbox-container">
              <div className="checkbox">
                <input type="checkbox" name="motor" id="motor" />
                <img draggable="false" src={BarquinhoIcon} alt="" />
                <label className="medium-grey" htmlFor="motor">
                  Motor
                </label>
              </div>
              <div className="checkbox">
                <input type="checkbox" name="sailboat" id="sailboat" />
                <img draggable="false" src={VeleiroIcon} alt="" />
                <label className="medium-grey" htmlFor="sailboat">
                  Veleiro
                </label>
              </div>
              <div className="checkbox">
                <input type="checkbox" name="sports" id="sports" />
                <img draggable="false" src={BarquinhoIcon} alt="" />
                <label className="medium-grey" htmlFor="sports">
                  Experiências
                </label>
              </div>
            </div> */}
          </div>
          <div className="right-container">
            {/* <div className="input-container">
              <img draggable="false" src={CalendarIcon} alt="icone pesquisa" />
              <input
                className="medium-grey"
                type="date"
                name=""
                id=""
                placeholder="Escolha suas datas"
              />
            </div> */}
            <button onClick={(event) => submitBusca(event)}>Procurar</button>
          </div>
        </form>
      </section>
      {renderSwitch()}
      <MaisProcurados />
    </section>
  );
}
