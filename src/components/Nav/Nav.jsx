import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Nav.scss";

export default function Nav() {
  const [isHome, setIsHome] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  let location = useLocation();
  let pathName = location.pathname;

  useEffect(() => {
    if (pathName === "/") {
      setIsHome(true);
      setIsAbout(false);
    } else if (pathName === "/about") {
      setIsAbout(true);
      setIsHome(false);
    } else {
      setIsAbout(false);
      setIsHome(false);
    }
  }, [pathName]);

  return (
    <nav>
      <Link to="/" className={`nav__link ${isHome && "activeLink"} `}>
        Accueil
      </Link>
      <Link to="/about" className={`nav__link ${isAbout && "activeLink"} `}>
        A Propos
      </Link>
    </nav>
  );
}
