import React from "react";
import "./Host.scss";

export default function Host({ name, picture }) {
  return (
    <div className="host">
      <h3 className="host__name">{name}</h3>
      <div className="host__pictureContainer">
        <img
          src={picture}
          alt="Hote de l'appartement"
          width={"64px"}
          height={"64px"}
        />
      </div>
    </div>
  );
}
