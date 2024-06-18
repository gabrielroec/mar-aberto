import { Resumo } from "../resumo/resumo";
import "./style.scss";

interface IModalConfirmacao {
  hide: () => void;
  openSucess: any
}

export function ModalConfirmacao(props: IModalConfirmacao) {
  const closeModal = async () => {
    await setTimeout(() => {}, 2000);
    props.hide();
    props.openSucess(true)
  };

  return (
    <div className="modal-confirmacao">
      <div className="detalhes-cliente">
        <h1>Confirmação da reserva</h1>
        <span className="medium-grey">
          Preencha seus dados para continuar sua reserva
        </span>
        <div className="input">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" />
        </div>
        <div className="input">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" id="email" />
        </div>
        <div className="input">
          <label htmlFor="email">Telefone</label>
          <input type="text" name="telefone" id="telefone" />
        </div>
        <div>
          <input type="checkbox" name="" id="" />
          <span>
            Ao clicar aqui você concorda com nossa Política de Privacidade.
          </span>
        </div>
        <button className="blue-button" onClick={closeModal}>
          Reservar
        </button>
      </div>
      <div className="line"></div>
      <Resumo />
    </div>
  );
}
