import React, { useState } from "react";
import "./Slider.scss";
import arrow from "../../assets/Pictures/arrowUp.svg";
import { useEffect } from "react";

export default function Slider({ picturesArr }) {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [moreThanOneImg, setMoreThanOneImg] = useState(true);

  useEffect(() => {
    if (picturesArr.length <= 1) {
      setMoreThanOneImg(false);
    }
    // eslint-disable-next-line
  }, []);

  const goToPreviousImg = () => {
    const isFirst = sliderIndex === 0;
    const newIndex = isFirst ? picturesArr.length - 1 : sliderIndex - 1;

    setSliderIndex(newIndex);
  };

  const goToNextImg = () => {
    const isLast = sliderIndex === picturesArr.length - 1;
    const newIndex = isLast ? 0 : sliderIndex + 1;

    setSliderIndex(newIndex);
  };

  const goToSelected = (index) => {
    setSliderIndex(index);
  };

  return (
    <div className="slider">
      <img
        src={picturesArr[sliderIndex]}
        alt="Présentation logement"
        className="slider__imagePrincipale"
      />
      {moreThanOneImg && (
        <>
          <div className="arrowLeftContainer" onClick={goToPreviousImg}>
            <img
              src={arrow}
              alt="fleche gauche"
              className="slider__arrowLeft"
            />
          </div>

          <div className="arrowRightContainer" onClick={goToNextImg}>
            <img
              src={arrow}
              alt="fleche droite"
              className="slider__arrowRight"
            />
          </div>

          <div className="slider__fractionalCounter">{`${sliderIndex + 1}/${
            picturesArr.length
          }`}</div>
          <div className="slider__bulletCounter">
            {picturesArr.map((picture, index) => (
              <div
                key={`${picture}-${index}`}
                className={`bullet ${
                  sliderIndex === index ? "bullet--active" : ""
                }`}
                onClick={() => goToSelected(index)}
              ></div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
