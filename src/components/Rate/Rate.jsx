import React from "react";
import redStar from "../../assets/Pictures/redStar.svg";
import greyStar from "../../assets/Pictures/greyStar.svg";
import "./Rate.scss";

export default function Rate({ rating }) {
  let arr = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      arr.push(redStar);
    } else {
      arr.push(greyStar);
    }
  }

  return (
    <div className="rating__container">
      {arr.map((star, index) => (
        <img key={index} src={star} alt="logo d'étoile" className="star" />
      ))}
    </div>
  );
}
