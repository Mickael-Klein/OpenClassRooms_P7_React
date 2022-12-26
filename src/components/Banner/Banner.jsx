import React from "react";
import "./Banner.scss";
// import "../../../public/logements.json";

export default function Banner({ source, sourceMobile, containText, text }) {
  return (
    <div className={`Banner ${!containText && "Banner--about"}`}>
      <picture>
        <source srcSet={source} media="(min-width: 768px)" />
        <source srcSet={sourceMobile} media="(max-width: 769px)" />
        <img src={source} alt="Paysage roche et mer dans la brume" />
      </picture>
      {containText && (
        <div className="bannerText">
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
