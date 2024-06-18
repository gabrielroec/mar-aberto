import { parceiros, IParceiro } from "./parceirios";
import "./style.scss";

export function Parceiros() {
  const content: IParceiro[] = parceiros;

  return (
    <section className="parceiros-section">
      <h1>Projeto Mar Social: Unindo Forças para um futuro sustentável</h1>
      <p className="light">
        A MarSocial, comprometida com a promoção de um turismo náutico
        responsável e inclusivo, orgulhosamente estabelece parcerias com
        empresas líderes em responsabilidade social e compromisso com a
        sustentabilidade. Entre essas empresas notáveis, destacam-se: a Empresa
        A, referência no setor de tecnologia, com sua expertise em inovação e
        soluções verdes; a Indústria B, pioneira na produção sustentável e
        comprometida em reduzir seu impacto ambiental; e a Companhia C, uma das
        principais fornecedoras de energia renovável, focada na transição para
        uma matriz energética mais limpa e renovável.
      </p>
      <div className="parceiros-container">
        {content.map((parceiro) => {
          return (
            <div className="parceiro">
              <img src={parceiro.icon} alt="" />
              <div>{parceiro.nome}</div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
