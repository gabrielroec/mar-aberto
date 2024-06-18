import { NavLink } from "react-router-dom";
import FecharIcon from "../../../misc/icons/xis.svg";

interface IMobileMenuProps {
  open: boolean;
  setOpen: (value: boolean) => void;
  setMarSocialLastActive: (value: boolean) => void;
  setMarAbertoLastActive: (value: boolean) => void;
}

export function MobileMenu(props: IMobileMenuProps) {
  const fechar = () => {
    props.setOpen(false);
  };

  const marAbertoLastHandler = () => {
    props.setMarAbertoLastActive(true);
    props.setMarSocialLastActive(false);
  };
  const marSocialLastHandler = () => {
    props.setMarSocialLastActive(true);
    props.setMarAbertoLastActive(false);
  };

  return (
    <div className={`mobile-menu ${props.open ? "active" : "inactive "}`}>
      <div className="fechar-button" onClick={fechar}>
        <img src={FecharIcon} alt="" />
      </div>
      <ul>
        <li onClick={fechar}>
          <NavLink to="/ajuda">Ajuda</NavLink>
        </li>
        {/* <li onClick={fechar}>
          <Link to="/experiencias">Experiências</Link>
        </li> */}
        <li onClick={fechar}>
          <NavLink to="/" onClick={marAbertoLastHandler}>
            Mar Aberto
          </NavLink>
        </li>
        <li onClick={fechar}>
          <NavLink to="/marsocial" onClick={marSocialLastHandler}>
            Mar Social
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
