import React, { useState, useEffect } from "react";
import "./Home.scss";
import Banner from "../../components/Banner/Banner";
import imgBannerHome from "../../assets/Pictures/imgBannerHome.png";
import imgBannerHomeMobile from "../../assets/Pictures/imgBannerHomeMobile.png";
import { Link } from "react-router-dom";
import Card from "../../components/Card/Card";

export default function Home() {
  const [Lodgings, setLodgings] = useState([]);

  useEffect(() => {
    async function fetchLodgings() {
      try {
        const response = await fetch("/Data/logements.json"); // Le fetch se fera au niveau du dossier Public automatiquement, comportement de React JS
        const data = await response.json();
        setLodgings(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchLodgings();
  }, []);

  return (
    <main>
      <Banner
        source={imgBannerHome}
        sourceMobile={imgBannerHomeMobile}
        containText={true}
        text={"Chez vous, partout et ailleurs"}
      />
      <section className="HomeMainSection">
        {Lodgings.map((lodging, index) => (
          <Link key={lodging.id} to={`logement/${lodging.id}`}>
            <Card title={lodging.title} picture={lodging.cover} />
          </Link>
        ))}
      </section>
    </main>
  );
}
