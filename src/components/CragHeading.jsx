import React from "react";
import "./styles/med-theme.css";

const artMap = {
  "Grande Grotta": `${import.meta.env.BASE_URL}artwork/grande-grotta.svg`,
  "Sikati Cave": `${import.meta.env.BASE_URL}artwork/sikati-cave.svg`,
  "Odyssey": `${import.meta.env.BASE_URL}artwork/odyssey.svg`,
  "Motor City": `${import.meta.env.BASE_URL}artwork/motor-city.svg`,
  "Vlychadia": `${import.meta.env.BASE_URL}artwork/vlychadia.svg`,
  "Telendos - Princess Canyon": `${import.meta.env.BASE_URL}artwork/telendos-princess-canyon.svg`,
  "St Constantine": `${import.meta.env.BASE_URL}artwork/st-constantine.svg`,
  "Arginonta Valley": `${import.meta.env.BASE_URL}artwork/arginonta-valley.svg`,
  "Kasteli / Panormos": `${import.meta.env.BASE_URL}artwork/kasteli-panormos.svg`,
  "Panorama": `${import.meta.env.BASE_URL}artwork/panorama.svg`,
  "Secret Garden": `${import.meta.env.BASE_URL}artwork/grande-grotta.svg`
};

export default function CragHeading({ cragKey, subtitle }) {
  return (
    <div className="crag-heading">
      {artMap[cragKey] && (
        <img
          src={artMap[cragKey]}
          alt={cragKey}
          className="crag-art"
        />
      )}
      <div className="crag-title">
        <h2>{cragKey}</h2>
        {subtitle && <p className="subtitle">{subtitle}</p>}
      </div>
    </div>
  );
}
