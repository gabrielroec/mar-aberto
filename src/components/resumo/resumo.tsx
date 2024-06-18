import "./style.scss";

export function Resumo() {
  return (
    <div className="resumo">
      <div className="important-info">
        Não esqueça de cancelar sua reserva se não puder comparecer, assim, você
        dá a chance de outra pessoa curtir a experiência!
      </div>
      <div>
        Você está reservando a experiência para os dias 13/05/2023 à 14/05/2023.
        Se quiser, você pode voltar e alterar as datas.
      </div>
      <div className="checkout-info">
        <div className="info">
          <div className="medium-grey">
            <span>R$75 x 4 pessoas</span>
            <span>R$300,00</span>
          </div>
          <div className="medium-grey">
            <span>R$75 x 2 dias</span>
            <span>R$600,00</span>
          </div>
          <div className="medium-grey">
            <span>Taxas</span>
            <span>R$0,00</span>
          </div>
          <div className="line"></div>
          <div>
            <span>Total</span>
            <span>R$600,00</span>
          </div>
          <div>* Você não pagará nada agora!</div>
        </div>
      </div>
    </div>
  );
}
