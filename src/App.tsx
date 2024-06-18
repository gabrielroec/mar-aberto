import React from "react";
import "./App.scss";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Busca } from "./pages/busca/busca";
import { HomeMarSocial } from "./pages/marsocial/home/home";
import { DetalhesExperienciaMarSocial } from "./pages/marsocial/detalhes-experiencia/detalhes-experiencia";
import { DetalhesExperiencia } from "./pages/detalhes-experiencia/detalhes-experiencia";
import { Ajuda } from "./pages/ajuda/ajuda";
import { Profile } from "./pages/userprofile/profile";
import DetalhesPasseio from "./pages/passeio/passeio";
import CadastrarBarco from "./pages/cadastrar-barco/cadastrarBarco";
import { ProfileSenha } from "./pages/userprofilesenha/profileSenha";
import { ProfileReservas } from "./pages/userprofilereservas/profilereserva";
import { ProfileReservasRealizadas } from "./pages/userprofilereservasrealizadas/profilereserva";
import { ProfileHist } from "./pages/userprofilehist/profilehist";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/buscar-experiencias" element={<Busca />}></Route>
      <Route path="/marsocial" element={<HomeMarSocial />}></Route>
      <Route
        path="/marsocial/:id/detalhes"
        element={<DetalhesExperienciaMarSocial />}
      ></Route>
      <Route
        path="/experiencia/:id/detalhes"
        element={<DetalhesExperiencia />}
      ></Route>
      <Route path="/ajuda" element={<Ajuda />}></Route>
      <Route path="/userprofile" element={<Profile />}></Route>{" "}
      <Route path="/passeio/:id" element={<DetalhesPasseio />}></Route>
      <Route path="/cadastrar-barco" element={<CadastrarBarco />}></Route>
      <Route path="/userprofile/senha" element={<ProfileSenha />}></Route>
      <Route path="/userprofile/reservas" element={<ProfileReservas />}></Route>
      <Route
        path="/userprofile/reservas/realizadas"
        element={<ProfileReservasRealizadas />}
      ></Route>
      <Route
        path="/userprofile/reservas/hist"
        element={<ProfileHist />}
      ></Route>
    </Routes>
  );
}

export default App;
