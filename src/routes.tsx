import { createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/home/home";
import { Busca } from "./pages/busca/busca";
import { DetalhesExperiencia } from "./pages/detalhes-experiencia/detalhes-experiencia";
import { Ajuda } from "./pages/ajuda/ajuda";
import { HomeMarSocial } from "./pages/marsocial/home/home";
import { DetalhesExperienciaMarSocial } from "./pages/marsocial/detalhes-experiencia/detalhes-experiencia";
import { Profile } from "./pages/userprofile/profile";
import DetalhesPasseio from "./pages/passeio/passeio";
import CadastrarBarco from "./pages/cadastrar-barco/cadastrarBarco";
import { ProfileSenha } from "./pages/userprofilesenha/profileSenha";
import { ProfileReservas } from "./pages/userprofilereservas/profilereserva";
import { ProfileReservasRealizadas } from "./pages/userprofilereservasrealizadas/profilereserva";
import { ProfileHist } from "./pages/userprofilehist/profilehist";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/buscar-experiencias",
    element: <Busca />,
  },
  {
    path: "/marsocial",
    element: <HomeMarSocial />,
  },
  {
    path: "/marsocial/:id/detalhes",
    element: <DetalhesExperienciaMarSocial />,
  },
  {
    path: "/experiencia/:id/detalhes",
    element: <DetalhesExperiencia />,
  },

  {
    path: "/ajuda",
    element: <Ajuda />,
  },
  {
    path: "/userprofile",
    element: <Profile />,
  },
  {
    path: "/userprofile/senha",
    element: <ProfileSenha />,
  },
  {
    path: "/passeio/:id",
    element: <DetalhesPasseio />,
  },
  {
    path: "/cadastrar-barco",
    element: <CadastrarBarco />,
  },
  {
    path: "/userprofile/reservas",
    element: <ProfileReservas />,
  },
  {
    path: "/userprofile/reservas/realizadas",
    element: <ProfileReservasRealizadas />,
  },
  {
    path: "/userprofile/reservas/hist",
    element: <ProfileHist />,
  },
]);
