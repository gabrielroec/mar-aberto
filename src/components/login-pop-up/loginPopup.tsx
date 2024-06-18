import axios, { getUsers } from "../../services/login";
import React, { useState } from "react";
import "./loginPopup.scss";

interface LoginPopupProps {
  onClose: () => void;
}
interface LoginPopupProps {
  onClose: () => void;
  setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
}

const LoginPopup: React.FC<LoginPopupProps> = ({ onClose, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

  const handleLogin = async () => {
    try {
      const tokenData = await getUsers({
        password: password,
        username: email,
      });
      setIsLoggedIn(true);
      onClose(); // Fechar o popup após o login
    } catch (error) {
      // Lidar com erros de login
    }
  };

  const handleSwitchToRegister = () => {
    setShowRegisterForm(true);
  };
  const handleSwitchToLogin = () => {
    setShowRegisterForm(false);
  };

  return (
    <>
      <div className="login-popup">
        <div className="logo-wrapper">
          <img src="../../logo.svg" alt="Logo" width="100" height="100" />
        </div>
        <p className="login-title">{showRegisterForm ? "Registro" : "Login"}</p>
        {showRegisterForm ? (
          <div className="register-form input-wrapper">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="text"
              placeholder="Nome"
              value={""} // Valor do nome aqui
              onChange={() => {}} // Manipulador de alteração do nome aqui
            />
            <input
              type="text"
              placeholder="Telefone"
              value={""} // Valor do telefone aqui
              onChange={() => {}} // Manipulador de alteração do telefone aqui
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        ) : (
          <div className="login-form input-wrapper">
            <input
              type="email"
              placeholder="Usuário"
              value={email}
              onChange={handleEmailChange}
            />
            <input
              type="password"
              placeholder="Senha"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
        )}

        {!showRegisterForm && (
          <div>
            <a className="esqueceu-senha" href="/">
              Esqueceu a senha?
            </a>
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={handleRememberMeChange}
              />
              Continuar logado?
            </label>
          </div>
        )}
        <button className="button-login" onClick={handleLogin}>
          {showRegisterForm ? "Registrar" : "Entrar"}
        </button>
        <div className="register-wrapper">
          {!showRegisterForm && (
            <p>
              Ainda não tem cadastro?{" "}
              <button onClick={handleSwitchToRegister}>
                Clique aqui para fazer a sua conta
              </button>
            </p>
          )}
          {showRegisterForm && (
            <p>
              Já tem conta?{" "}
              <button onClick={handleSwitchToLogin}>
                Clique aqui para fazer o login
              </button>
            </p>
          )}
        </div>
      </div>
      <div className="background" onClick={onClose}></div>
    </>
  );
};

export default LoginPopup;
