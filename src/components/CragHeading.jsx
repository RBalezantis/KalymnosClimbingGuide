import React from "react";
import "./styles/med-theme.css";

const artMap = {
  "Grande Grotta": "/artwork/grande-grotta.svg",
  "Sikati Cave": "/artwork/sikati-cave.svg",
  "Odyssey": "/artwork/odyssey.svg",
  "Motor City": "/artwork/motor-city.svg",
  "Vlychadia": "/artwork/vlychadia.svg",
  "Telendos - Princess Canyon": "/artwork/telendos-princess-canyon.svg",
  "St Constantine": "/artwork/st-constantine.svg",
  "Arginonta Valley": "/artwork/arginonta-valley.svg",
  "Kasteli / Panormos": "/artwork/kasteli-panormos.svg",
  "Panorama": "/artwork/panorama.svg"
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
