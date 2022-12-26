import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import arrowUp from "../../assets/Pictures/arrowUp.svg";
import "./Dropdown.scss";

export default function Dropdown({ title, content, isDefaultOpen, classProp }) {
  const [isOpen, setIsOpen] = useState(isDefaultOpen);

  const toogleDropdown = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (isOpen) {
      // si dropdown ouvert par défaut car vient de logment pour calcul taille max, alors fermeture pour que du point de vue user, fermé par défaut
      toogleDropdown();
    } // eslint-disable-next-line
  }, []);

  return (
    <div className={`dropdown ${classProp}`}>
      <div className="title" onClick={toogleDropdown}>
        <h3>{title}</h3>
        <img
          src={arrowUp}
          alt="Flèche"
          className={isOpen ? "arrow" : "arrowDown"}
        />
      </div>

      {isOpen ? (
        <div className="dropdown__content">
          {Array.isArray(content) ? (
            <ul>
              {content.map((equipment, index) => (
                <li key={`${equipment}-${index}`}>{equipment}</li>
              ))}
            </ul>
          ) : (
            content
          )}
        </div>
      ) : null}
    </div>
  );
}
