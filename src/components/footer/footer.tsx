import "./style.scss";
import LogoBranca from "../../misc/logo-branca.svg";

export function Footer() {
  return (
    <footer>
      <img
        draggable="false"
        className="logo"
        src={LogoBranca}
        alt="logo mar aberto"
      />
      <div className="contact-info">
        <div>© 2023 MarAberto. Todos os direitos reservados</div>
        <div>marabertosocial@gmail.com</div>
        <div>(47) 98413-2542</div>
      </div>
    </footer>
  );
}
