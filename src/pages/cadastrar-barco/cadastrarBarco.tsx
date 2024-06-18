import React, { useState, useEffect } from "react";
import LogoMarAbertoColorida from "./logoMarAbertoColorida.svg";
import "./styles.scss";

const CadastrarBarco = () => {
  const [submitted, setSubmitted] = useState(false);
  const [countdown, setCountdown] = useState(3);

  const handleSubmit = (event: { preventDefault: () => void; target: any }) => {
    event.preventDefault();
    // Aqui você pode adicionar a lógica para enviar os dados do formulário
    // Depois de enviar os dados, você pode definir submitted como true para mostrar a div popup
    setSubmitted(true);
    // Inicia o contador regressivo
    startCountdown();

    // Define o action e method do formulário dinamicamente
    const form = event.target;
    form.action = "https://formsubmit.co/gabrielroecc.profissional@gmail.com";
    form.method = "POST";
    form.submit();
  };

  const startCountdown = () => {
    // Inicia o contador regressivo
    const intervalId = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    // Quando o contador chegar a 1, redireciona para /home e limpa o intervalo
    setTimeout(() => {
      clearInterval(intervalId);
      window.location.href = "/";
    }, 3000);
  };

  useEffect(() => {
    // Verifica a URL atual ao montar o componente
    const navElement = document.querySelector("nav");
    if (
      navElement !== null &&
      window.location.pathname === "/cadastrar-barco"
    ) {
      // Se a URL for "/cadastrar-barco", aplica o estilo display: none na nav
      navElement.style.display = "none";
    }

    // Limpa o estilo quando o componente é desmontado para garantir que a navegação volte ao normal
    return () => {
      if (navElement !== null) {
        navElement.style.display = "block";
      }
    };
  }, []); // Executa o efeito apenas uma vez ao montar o componente

  return (
    <>
      <div className={`popup ${submitted ? "active" : ""}`}>
        <p className="ok">
          Seus dados foram enviados, em breve nossa equipe entrará em contato
          com você!
        </p>
        <p className="redirect">
          Redirecionando para home em <strong>{countdown}</strong>
        </p>
      </div>
      <div className="first-section">
        <a href="/">
          <img src={LogoMarAbertoColorida} alt="" />
        </a>

        <h1>Junte-se à Mar Aberto e torne seu barco um sucesso.</h1>
        <p>
          Preencha o formulário agora e nossa equipe entrará em contato para que
          o passeio com a sua embarcação fique em destaque para novos clientes!
        </p>
        <a href="#form" className="cadastrar-barco">
          <p> Quero cadastrar meu barco</p>
        </a>
      </div>

      <div id="form" className="second-section">
        <div className="form-wrapper">
          <h1>Preencha o formulário para cadastrarmos a sua embarcação.</h1>
          <form onSubmit={handleSubmit}>
            <div className="input-wrapper">
              <p>Nome Completo</p>
              <input type="text" name="nome" id="" required />
            </div>
            <div className="input-wrapper">
              <p>Telefone de contato</p>
              <input type="text" name="tel" id="" required />
            </div>
            <div className="input-wrapper">
              <p>E-mail para contato</p>
              <input type="email" name="email" id="" required />
            </div>
            <div className="input-wrapper">
              <p>
                Fale sobre a sua embarcação e o passeio que deseja cadastrar
              </p>
              <textarea name="detalhes" required id=""></textarea>
            </div>
            <input type="hidden" name="_captcha" value="false"></input>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/"
            ></input>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CadastrarBarco;
