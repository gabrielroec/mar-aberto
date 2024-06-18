/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./senhastyle.scss";
import Sidebar from "./sidebar/sidebar";
import Nav from "./nav/nav";

export function ProfileSenha() {
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
        <div className="senha-wrapper">
          <div className="buttons-wrapper">
            <a href="/userprofile" className="perfil">
              Pefil
            </a>
            <a href="/userprofile/senha" className="senha">
              Senha
            </a>
          </div>
          <div className="profile-info-wrapper">
            <p className="title">Troque sua senha</p>

            <form action="">
              <div className="field">
                <p>Senha atual</p>
                <input type="password" placeholder="Sua senha" />
              </div>
              <div className="field">
                <p>Nova senha</p>
                <input type="password" placeholder="Nova senha" />
              </div>
              <div className="field">
                <p>Confirme a sua nova senha</p>
                <input type="password" placeholder="Confirme sua nova senha" />
              </div>
              <button type="submit">Salvar</button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
