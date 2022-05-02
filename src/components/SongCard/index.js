import React, { useEffect } from "react";
import { CardBg } from "./styles";
import play from "../../assets/play.svg";
import { useNavigate } from "react-router-dom";
import { useSong } from "../../context/songContext";
export default function SongCard({id, picture, title, artist }) {
  const navigate = useNavigate();
  const {ActivePlaylist, setActivePlaylist} = useSong()
  useEffect(()=> {console.log(ActivePlaylist)}, [])
  function handleClick(){
    console.log(id)
    setActivePlaylist(id)
    console.log(ActivePlaylist)
    navigate("/playlistqueue")
  }
  return (
    <CardBg onClick={() => handleClick()}>
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
