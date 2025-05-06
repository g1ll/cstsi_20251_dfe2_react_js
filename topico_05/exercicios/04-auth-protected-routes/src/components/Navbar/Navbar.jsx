// import React from "react";
import './navbar.css'
import appLogo from './../../assets/appLogo.svg';
import { Link } from "react-router-dom";
import { ThemeButton } from '../Buttons/ThemeButton';
import { useTheme } from '../../contexts/ThemeProvider';

export const Navbar = () => {

  const {theme} = useTheme();

  return (
   <nav className={`nav_container ${theme}`}>
        <div className="nav_logo">
          <Link to="/">
          <img src={appLogo}  className="nav_logo_img" />
          </Link>
        </div>
        <div className="nav_links">
          <Link to="/login">
            Log in
          </Link>
          <Link to="register">
            Register
          </Link>
          <ThemeButton 
              width={30}
              height={30}
          />
        </div>
      </nav>
  );
};
