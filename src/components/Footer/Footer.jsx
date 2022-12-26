import React from "react";
import logoFooter from "../../assets/Pictures/logoFooter.svg";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <img src={logoFooter} alt="Logo du site web Kasa" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
