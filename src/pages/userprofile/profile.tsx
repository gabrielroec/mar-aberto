/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./profilestyle.scss";
import Sidebar from "./sidebar/sidebar";
import Nav from "./nav/nav";

export function Profile() {
  const [activeScreen, setActiveScreen] = useState("Perfil"); // Define "Perfil" como tela ativa
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("userprofile")) {
      const nav = document.querySelector("nav");
      if (nav) {
        nav.style.display = "none";
      }
      const footer = document.querySelector("footer");
      if (footer) {
        footer.style.display = "none";
      }
    }
  }, [location.pathname]);

  return (
    <>
      <div className="menus">
        <Sidebar />
        <Nav />
        <div className="profile-wrapper">
          <div className="buttons-wrapper">
            <a href="/userprofile" className="perfil">
              Pefil
            </a>
            <a href="/userprofile/senha" className="senha">
              Senha
            </a>
          </div>
          <div className="profile-info-wrapper">
            <p className="title">Informações pessoais</p>

            <form action="">
              <div className="field">
                <p>Nome</p>
                <input type="text" placeholder="Thomas Anree" />
              </div>
              <div className="field">
                <p>Telefone</p>
                <input type="text" placeholder="+55 9 00 0000 0000" />
              </div>
              <div className="field">
                <p>Email</p>
                <input type="email" placeholder="tomasanree@gmail.com" />
              </div>
              <div className="adress-fields">
                <div className="field">
                  <p>CEP</p>
                  <input type="string" placeholder="75555-5555" />
                </div>
                <div className="field">
                  <p>Nome da Rua</p>
                  <input
                    type="string"
                    placeholder="Rua Sustentabilidade Verde"
                  />
                </div>
              </div>
              <div className="adress-fields">
                <div className="field">
                  <p>Complemento</p>
                  <input type="string" placeholder="Casa" />
                </div>
                <div className="field">
                  <p>Número</p>
                  <input type="string" placeholder="461" />
                </div>
              </div>
              <div className="adress-fields">
                <div className="field">
                  <p>Cidade</p>
                  <input type="string" placeholder="São Paulo" />
                </div>
                <div className="field">
                  <p>Estado</p>
                  <input type="string" placeholder="São Paulo" />
                </div>
              </div>
              <button type="submit">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
