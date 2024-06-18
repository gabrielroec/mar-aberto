import React from "react";
import "./style.scss";
import notificationsIcon from "./assets/notifications-icon.svg";

const Nav = () => {
  return (
    <div className="nav">
      Perfil
      <div className="perfil-buttons">
        <div className="notifications">
          <img src={notificationsIcon} alt="" />
          <div className="notification-number">1</div>
        </div>
        <div className="profile-main-button">
          <div className="user-info">
            <span>Thomas Anree</span>
            <span>tomasanree@gmail.com</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
