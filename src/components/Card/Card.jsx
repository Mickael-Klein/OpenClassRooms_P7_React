import React from "react";
import PropTypes from "prop-types";
import "./Card.scss";

export default function Card({ title, picture }) {
  return (
    <div className="cardWrapper">
      <img src={picture} alt={title} />
      <h3>{title}</h3>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
};

Card.defaultProps = {
  title: "",
  picture: "",
};
