import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/Pictures/LOGO.svg";
import NAV from "../Nav/Nav";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo du site web Kasa" />
      </Link>
      <NAV />
    </header>
  );
}
