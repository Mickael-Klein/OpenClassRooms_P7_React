import React, { useState } from "react";
import "./About.scss";
import Banner from "../../components/Banner/Banner";
import imgBannerAbout from "../../assets/Pictures/imgBannerAbout.png";
import imgBannerAboutMobile from "../../assets/Pictures/imgBannerAboutMobile.png";
import Dropdown from "../../components/Dropdown/Dropdown";
import { useEffect } from "react";

export default function About() {
  const [aboutDatas, setAboutDatas] = useState([]);

  useEffect(() => {
    async function fetchDatas() {
      try {
        const response = await fetch("/Data/about.json"); // Le fetch se fera au niveau du dossier Public automatiquement, comportement de React JS
        const data = await response.json();
        setAboutDatas(data);
      } catch (error) {
        console.error(error);
      }
    }
    fetchDatas();
  }, []);

  return (
    <>
      {aboutDatas.length > 0 && (
        <main className="about">
          <Banner
            source={imgBannerAbout}
            sourceMobile={imgBannerAboutMobile}
            containText={false}
          />
          <section className="dropdowns">
            {aboutDatas.map((data, index) => (
              <div key={`${data}-${index}`} className="about__dropdown">
                <Dropdown
                  title={data.title}
                  content={data.content}
                  isDefaultOpen={false}
                  classProp={"about__dropdown"}
                />
              </div>
            ))}
          </section>
        </main>
      )}
    </>
  );
}
