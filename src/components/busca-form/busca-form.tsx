import "./style.scss";
import SearchIcon from "../../misc/icons/map-pin.svg";
import VeleiroIcon from "../../misc/icons/veleiro-icon.svg";
import BarquinhoIcon from "../../misc/icons/barquinho-icon.svg";
import CalendarIcon from "../../misc/icons/calendar.svg";
import { useNavigate } from "react-router";
import { useState } from "react";
import moment from "moment";
import { ExperienceType } from "../../models/experienceType";

export function BuscaForm() {
  let navigate = useNavigate();
  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    navigate("/buscar-experiencias");
  };

  const [location, setLocation] = useState("");
  const [startDate, setStartDate] = useState(moment().format("YYYY-MM-DD"));
  const [boatType, setBoatType] = useState(null);

  const locationHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setLocation(event.target.value);
  };

  const startDateHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    const date = moment(new Date(event.target.value))
      .utc()
      .format("YYYY-MM-DD");
    setStartDate(date);
  };

  const boatTypeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {};

  const submitRequestHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const request = {
      location: location,
      startDate: startDate,
      boatType: boatType ? boatType : ExperienceType.ALL,
    };

    navigate(
      `/buscar-experiencias?location=${request.location}&startDate=${request.startDate}&boatType=${request.boatType}`
    );
  };

  return (
    <form
      className="form-busca-component"
      onSubmit={(event) => {
        onSubmitHandler(event);
      }}
    >
      <div className="header dark-deep-green">
        <h1 className="light">
          Conectando-se com experiências marítimas e natureza
        </h1>
        <div className="light dark-deep-green">
          Procure pela experiência ideal e crie momentos únicos
        </div>
      </div>
      <div className="inputs">
        <div className="input-container">
          <img draggable="false" src={SearchIcon} alt="icone pesquisa" />
          <input
            type="text"
            placeholder="Local da próxima aventura?"
            value={location}
            onChange={(event) => {
              locationHandler(event);
            }}
          />
        </div>
        <div className="input-container">
          <img draggable="false" src={CalendarIcon} alt="icone pesquisa" />
          <input
            className="medium-grey"
            type="date"
            name=""
            id=""
            value={startDate}
            onChange={(event) => startDateHandler(event)}
          />
        </div>
      </div>
      <div className="bottom">
        <div className="checkbox-container">
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
              Experência
            </label>
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={(event) => {
          submitRequestHandler(event);
        }}
      >
        Procurar
      </button>
    </form>
  );
}
