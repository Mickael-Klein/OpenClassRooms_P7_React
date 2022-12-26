import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Logement.scss";
import Tag from "../../components/Tag/Tag";
import Host from "../../components/Host/Host";
import Rate from "../../components/Rate/Rate";
import Dropdown from "../../components/Dropdown/Dropdown";
import Slider from "../../components/Slider/Slider";

export default function Logement() {
  const [Lodgings, setLodgings] = useState([]);
  const [Lodging, setLodging] = useState(null);

  const navigate = useNavigate();
  let { id } = useParams();

  useEffect(() => {
    async function fetchLodgings() {
      try {
        const response = await fetch("/Data/logements.json");
        const data = await response.json();
        setLodgings(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLodgings();
  }, []);

  useEffect(() => {
    if (Lodgings.length !== 0) {
      const lodgingFound = Lodgings.find((elem) => elem.id === id);
      if (lodgingFound === undefined) {
        navigate("/notFound");
      } else {
        setLodging(lodgingFound);
      }
    } // eslint-disable-next-line
  }, [Lodgings]);

  const [heightMax, setHeightMax] = useState("");

  useEffect(() => {
    //apres le rendering, calcul la taille max du plus grand dropdown pour la passer en style aux composants dropdown__container et eviter
    // des fluctuations disgracieuse de taille lors de l'ouverture/fermeture de celui qui est le plus grand

    //ne le fera pas pour la version tablette que le layout des dropdowns n'est pas le même
    let windowWidth = window.innerWidth;

    if (windowWidth > 769) {
      const dropdownArr = document.querySelectorAll(".dropdown__container");

      if (dropdownArr.length > 0) {
        let arrOfHeights = [];
        for (let i = 0; i < dropdownArr.length; i++) {
          arrOfHeights.push(dropdownArr[i].offsetHeight);
        }
        let maxHeight = Math.max(...arrOfHeights);
        setHeightMax(maxHeight);
        window.scrollTo(0, 0);
      }
    }
  }, [Lodging]);

  return (
    <>
      {Lodging && (
        <main>
          <section className="sliderWrapper">
            <Slider picturesArr={Lodging.pictures} />
          </section>
          <section className="logementContent">
            <div className="presentation">
              <div className="presentation__title">
                <h1>{Lodging.title}</h1>
                <p>{Lodging.location}</p>
                <div className="presentation__tags">
                  {Lodging.tags.map((tag, index) => (
                    <Tag key={`${tag}-${index}`} tag={tag} />
                  ))}
                </div>
              </div>

              <div className="presentation__owner">
                <Host name={Lodging.host.name} picture={Lodging.host.picture} />
                <Rate rating={parseInt(Lodging.rating)} />
              </div>
            </div>

            <div className="dropdowns">
              <div
                className="dropdown__container"
                style={{ height: `${heightMax}px` }}
              >
                <Dropdown
                  title={"Description"}
                  content={Lodging.description}
                  isDefaultOpen={true}
                  classProp={"LodgingDropdown"}
                />
              </div>
              <div
                className="dropdown__container"
                style={{ height: `${heightMax}px` }}
              >
                <Dropdown
                  title={"Équipements"}
                  content={Lodging.equipments}
                  isDefaultOpen={true}
                  classProp={"LodgingDropdown"}
                />
              </div>
            </div>
          </section>
        </main>
      )}
    </>
  );
}
