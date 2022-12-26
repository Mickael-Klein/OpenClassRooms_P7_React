import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.scss";

export default function NotFound() {
  return (
    <main className="notFoundContainer">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/" className="notFoundLink">
        Retourner sur la page d’accueil
      </Link>
    </main>
  );
}
