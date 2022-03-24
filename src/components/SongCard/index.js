import React from "react";
import { CardBg } from "./styles";
import play from "../../assets/play.svg";
export default function SongCard({ picture, title, artist }) {
  return (
    <CardBg>
      <img className="picture" src={picture} />
      <div className="textContainer">
        <h1 className="title">{title}</h1>
        <h2 className="artist">{artist}</h2>
      </div>
      <button className="play">
        <img src={play} />
      </button>
    </CardBg>
  );
}
