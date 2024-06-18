import "./style.scss";
import SobreMarAbertoLogo from "../../../../misc/Intersect.jpg";

export function Introduction() {
  return (
    <section className="sobre">
      <h1>Sobre o Mar Social</h1>
      <h2 className="blue light">
        Feito por uma comunidade sustentável e inclusiva
      </h2>
      <div className="content">
        <div className="text-container">
          <p className="light">
            A MarAberto se orgulha de apresentar o MarSocial, um projeto social
            inovador que se propõe a criar um impacto positivo tanto no setor de
            turismo quanto nas comunidades locais do litoral catarinense. Com
            uma visão de longo prazo e um compromisso inabalável com a
            sustentabilidade e a inclusão, o MarSocial tem como objetivo
            redefinir a maneira como os passeios de barco são vivenciados e
            percebidos.
          </p>
          <p className="light">
            Através da colaboração com pescadores registrados em uma Organização
            Não Governamental local, o projeto promove uma conexão genuína entre
            os turistas e a comunidade, abrindo as portas para uma experiência
            marítima enriquecedora e significativa.
          </p>
          <p className="light">
            Ao utilizar uma plataforma de fácil acesso aos turistas, o MarSocial
            proporciona uma maneira conveniente e eficiente de reservar passeios
            em embarcações socioculturais. Com a orientação e consultoria da
            MarAberto, os pescadores podem criar roteiros autênticos e
            envolventes, que não apenas exploram a beleza natural da região, mas
            também destacam a rica cultura e tradições locais.
          </p>
          <p className="light">
            Um dos pilares do projeto é a inclusão das mulheres na atividade do
            turismo náutico, proporcionando oportunidades iguais e empoderando a
            comunidade como um todo. Além disso, o projeto visa a melhoria da
            qualidade e segurança dos passeios, ao mesmo tempo em que ajuda a
            diminuir a pesca predatória, promovendo práticas sustentáveis.
          </p>
        </div>
        <img draggable="false" src={SobreMarAbertoLogo} alt="" />
      </div>
    </section>
  );
}
