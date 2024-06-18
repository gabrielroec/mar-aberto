import React from "react";
import "./style.scss";
import logo from "./assets/logo.svg";
import profileIcon from "./assets/profile-icon.svg";
import reservaIcon from "./assets/reservaicon.svg";
import histIcon from "./assets/historicoicon.svg";
import talkIcon from "./assets/talkicon.svg";
import ajudaIcon from "./assets/ajuda.svg";
import sairIcon from "./assets/sair.svg";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div>
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="screens">
          <a href="/userprofile" className={`profile-screen`}>
            <img src={profileIcon} alt="" /> Perfil
          </a>
          <a href="/userprofile/reservas" className={`reserve-screen `}>
            <img src={reservaIcon} alt="" /> Suas reservas
          </a>
          <a href="/userprofile/reservas/hist" className={`recent-screen`}>
            <img src={histIcon} alt="" />
            Histórico
          </a>
          <a href="#" className={`messages-screen`}>
            <img src={talkIcon} alt="" /> Mensagens
          </a>
        </div>
      </div>

      <div className="function">
        <div className="functions-button">
          <img src={ajudaIcon} alt="" /> Perfil
        </div>
        <div className="functions-button logoff">
          <img src={sairIcon} alt="" /> Sair
        </div>
      </div>
    </div>
  );
}
