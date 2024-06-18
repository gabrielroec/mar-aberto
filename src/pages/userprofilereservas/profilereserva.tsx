import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./profilestylereservas.scss";
import Sidebar from "./sidebar/sidebar";
import Nav from "./nav/nav";
import thumbPicutre from "./pic1.png";
import thumbPicutre2 from "./pic2.png";
import thumbPicutre3 from "./pic3.png";
import thumbPicutre4 from "./pic4.png";

export function ProfileReservas() {
  const [activeScreen, setActiveScreen] = useState("Perfil"); // Define "Perfil" como tela ativa
  const [numReservas, setNumReservas] = useState(0); // Estado para armazenar o número de reservas
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

    // Atualiza o número de reservas quando o componente monta ou quando location.pathname muda
    const reservasCards = document.querySelectorAll(".reservas-card");
    setNumReservas(reservasCards.length);
  }, [location.pathname]);

  return (
    <>
      <div className="menus">
        <Sidebar />
        <Nav />
        ''
        <div className="reservas-wrapper">
          <div className="buttons-wrapper">
            <a href="/userprofile/reservas" className="perfil">
              Passeios agendados
            </a>
            <a href="/userprofile/reservas/realizadas" className="senha">
              Passeios realizados
            </a>
          </div>
          <div className="reservas-info-wrapper">
            <div className="reservas-filter">
              <div className="showing-cards">
                Mostrando {numReservas} de {numReservas}
              </div>
              <div className="reservas-card-wrapper">
                <div className="reservas-card">
                  <img src={thumbPicutre} alt="" />
                  <div className="reserva-infos">
                    <p className="name-card">Santo Antônio, Florianópolis</p>
                    <p className="details-card">Catamarâ 40 pés Amistad</p>
                    <p className="qtd-pessoas">
                      2 pessoas <span>09/10/2024</span>
                    </p>
                    <div className="price-reembolso">
                      <p className="price">R$700,00</p>
                      <p className="reembolso">Reembolso</p>
                    </div>
                  </div>
                </div>

                <div className="reservas-card">
                  <img src={thumbPicutre2} alt="" />
                  <div className="reserva-infos">
                    <p className="name-card">Santo Antônio, Florianópolis</p>
                    <p className="details-card">Catamarâ 40 pés Amistad</p>
                    <p className="qtd-pessoas">
                      2 pessoas <span>09/10/2024</span>
                    </p>
                    <div className="price-reembolso">
                      <p className="price">R$700,00</p>
                      <p className="reembolso">Reembolso</p>
                    </div>
                  </div>
                </div>

                <div className="reservas-card">
                  <img src={thumbPicutre3} alt="" />
                  <div className="reserva-infos">
                    <p className="name-card">Santo Antônio, Florianópolis</p>
                    <p className="details-card">Catamarâ 40 pés Amistad</p>
                    <p className="qtd-pessoas">
                      2 pessoas <span>09/10/2024</span>
                    </p>
                    <div className="price-reembolso">
                      <p className="price">R$700,00</p>
                      <p className="reembolso">Reembolso</p>
                    </div>
                  </div>
                </div>

                <div className="reservas-card">
                  <img src={thumbPicutre4} alt="" />
                  <div className="reserva-infos">
                    <p className="name-card">Santo Antônio, Florianópolis</p>
                    <p className="details-card">Catamarâ 40 pés Amistad</p>
                    <p className="qtd-pessoas">
                      2 pessoas <span>09/10/2024</span>
                    </p>
                    <div className="price-reembolso">
                      <p className="price">R$700,00</p>
                      <p className="reembolso">Reembolso</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
