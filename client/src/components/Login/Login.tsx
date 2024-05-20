import React from "react";
import "./login.css";
import { useLocation, useNavigate } from "react-router-dom";
interface props {
  updateAuth: (data: any) => void;
}
export const Login: React.FC<props> = ({ updateAuth }) => {
  const baseUrl = window.location.origin;
  const location = useLocation();
  const currentPath = location.pathname;
  const navigate = useNavigate();
  const handleLoginBtn = () => {
    localStorage.setItem('auth', 'TRUE');
    updateAuth(true);
    navigate(currentPath);
  };
  return (
    <div className="wrapper">
      <div className="logo">
        <img
          //   src="https://www.freepnglogos.com/uploads/twitter-logo-png/twitter-bird-symbols-png-logo-0.png"
          src={baseUrl + "/logo3.jpeg"}
          alt=""
        />
      </div>
      <div className="text-center mt-4 name">KSCPCR</div>
      <form className="p-3 mt-3">
        <div className="form-field d-flex align-items-center">
          <span className="far fa-user"></span>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Username"
          />
        </div>
        <div className="form-field d-flex align-items-center">
          <span className="fas fa-key"></span>
          <input
            type="password"
            name="password"
            id="pwd"
            placeholder="Password"
          />
        </div>
        <button className="btn mt-3" onClick={handleLoginBtn}>
          Login
        </button>
      </form>
      <div className="text-center fs-6">
        <a href="#">Forget password?</a> or <a href="#">Sign up</a>
      </div>
    </div>
  );
};
