import "./style.scss";
import BarcoVeleiro from "../../../misc/sobre-veleiro.jpg";

export function Sobre() {
  return (
    <section className="sobre">
      <h1>Sobre o Mar Aberto</h1>
      <h2 className="blue light">Conheça mais sobre o projeto</h2>
      <div className="content">
        <div className="text-container">
          <p className="light">
            Aqui, acreditamos que cada pessoa tem uma experiência única a
            vivenciar. É por isso que nossa plataforma coloca você no comando
            total da sua jornada. Escolha a duração da sua estadia, o destino
            que deseja explorar e as atividades que mais lhe interessam. Quer
            seja uma viagem relaxante ao longo da costa, um mergulho nas águas
            cristalinas ou um encontro estelar sob o céu noturno, você define
            como deseja aproveitar o seu tempo a bordo.
          </p>
          <p className="light">
            Uma das joias da MarAberto é a oportunidade de se conectar com
            anfitriões apaixonados pelos seus barcos e pelas águas. Cada
            experiência disponível na nossa plataforma tem um anfitrião por trás
            dele, pronto para compartilhar histórias, conhecimentos locais e
            dicas para tornar a sua estadia memorável. Essas conexões autênticas
            não apenas enriquecem a sua experiência, mas também garantem que
            você esteja em boas mãos durante a sua jornada marítima.
          </p>
          <p className="light">
            Se você está em busca de uma fuga tranquila à beira-mar ou de uma
            aventura emocionante nas águas abertas, a MarAberto está aqui para
            abrir um mundo de possibilidades. Navegue pelas opções, escolha a
            sua experiência idela e embarque em uma viagem que ficará marcada na
            sua memória para sempre.
          </p>
          <p className="light">
            Descubra o seu "lar" flutuante em lugares inexplorados e transforme
            a maneira como você vivencia os oceanos com a MarAberto - a
            plataforma de aventuras aquáticas que está moldando o futuro das
            experiências marítimas.
          </p>
        </div>
        <img draggable="false" src={BarcoVeleiro} alt="" />
      </div>
    </section>
  );
}
