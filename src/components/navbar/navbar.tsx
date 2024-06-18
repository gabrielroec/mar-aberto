// Adicione este import
import React, { useEffect, useState } from "react";
import "./style.scss";
import LogoMarAbertoColorida from "../../misc/logo-colorida.svg";
import LogoMarSocialColorida from "../../misc/marsocial-colorido.jpg";
import BurguerMenuIcon from "../../misc/icons/burguer.svg";
import { NavLink } from "react-router-dom";
import { MobileMenu } from "./mobile-menu/mobile-menu";
import LoginPopup from "../login-pop-up/loginPopup";

export function NavBar() {
  const [openMobile, setOpenMobile] = useState(false);
  const [marAbertoLastActive, setMarAbertoLastActive] = useState(true);
  const [marSocialLastActive, setMarSocialLastActive] = useState(false);
  const [showLoginPopup, setShowLoginPopup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    return storedIsLoggedIn ? JSON.parse(storedIsLoggedIn) : false;
  });

  useEffect(() => {
    localStorage.setItem("isLoggedIn", JSON.stringify(isLoggedIn));
  }, [isLoggedIn]);

  const openMenu = () => {
    setOpenMobile(true);
  };

  const marAbertoLastHandler = () => {
    setMarAbertoLastActive(true);
    setMarSocialLastActive(false);
  };
  const marSocialLastHandler = () => {
    setMarSocialLastActive(true);
    setMarAbertoLastActive(false);
  };
  const handleLoginButtonClick = () => {
    setShowLoginPopup(true);
  };
  const handleCloseLoginPopup = () => {
    setShowLoginPopup(false);
  };

  // Adicione este manipulador de eventos
  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <nav>
      <div className="logo-search-container">
        <NavLink
          className={`logo ${marAbertoLastActive ? "active" : ""}`}
          to="/"
          onClick={marAbertoLastHandler}
        >
          <img
            draggable="false"
            src={LogoMarAbertoColorida}
            alt="logotipo mar aberto"
          />
        </NavLink>
        <NavLink
          className={`logo ${marSocialLastActive ? "active" : ""}`}
          to="/marsocial"
          onClick={marSocialLastHandler}
        >
          <img
            draggable="false"
            src={LogoMarSocialColorida}
            alt="logotipo mar social"
          />
        </NavLink>
      </div>
      <div className="menu-items-container">
        <ul className="menu-items">
          <li>
            <a href="/ajuda">Ajuda</a>
          </li>
        </ul>
        <div className="sign-in-container">
          <a href="/cadastrar-barco">Cadastrar meu barco</a>
        </div>{" "}
        <div className="sign-in-container">
          <a href="/buscar-experiencias">Experiências</a>
        </div>{" "}
        <div>
          <ul>
            {isLoggedIn ? (
              <li>
                <div className="profile-main-button">
                  <div className="user-info">
                    <span>Olá, </span>
                    <span>Thomas Anree</span>
                  </div>
                  <div className="profile-and-logoff">
                    <ul>
                      <li>
                        <a href="/userprofile" className="profile-button">
                          Menu
                        </a>
                      </li>

                      <li className="logoff" onClick={handleLogout}>
                        Sair
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            ) : (
              <li className="login-button" onClick={handleLoginButtonClick}>
                Login
              </li>
            )}
          </ul>
          {showLoginPopup && (
            <LoginPopup
              onClose={handleCloseLoginPopup}
              setIsLoggedIn={setIsLoggedIn}
            />
          )}{" "}
        </div>
      </div>
      <div className="burguer-menu" onClick={openMenu}>
        <img src={BurguerMenuIcon} alt="" />
      </div>
      <MobileMenu
        open={openMobile}
        setOpen={setOpenMobile}
        setMarAbertoLastActive={setMarAbertoLastActive}
        setMarSocialLastActive={setMarSocialLastActive}
      />
    </nav>
  );
}
