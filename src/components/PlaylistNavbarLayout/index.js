import React from "react";
import Logo from "../Logo";
import { NavBackground, Options, OptionItem } from "./styles";
import home from "../../assets/home.svg";
import library from "../../assets/Library.svg";
import like from "../../assets/LikedSongs.svg";
import search from "../../assets/Search.svg";
import create from "../../assets/CreatePlaylist.svg";

export default function PlaylistNavbarLayout() {
  return (
    <NavBackground>
      <div className="LogoContainer">
        <Logo type="footer"></Logo>
      </div>
      <Options>
        <OptionItem>
          <img src={home} alt="home svg" /> Home
        </OptionItem>
        <OptionItem>
          <img src={search} alt="search svg" />
          Search
        </OptionItem>
        <OptionItem>
          <img src={library} alt="library svg" />
          Your Library
        </OptionItem>
        <br />
        <OptionItem>
          <img src={create} alt="create svg" />
          Create
        </OptionItem>
        <OptionItem>
          <img src={like} alt="like svg" />
          Liked Songs
        </OptionItem>
      </Options>
    </NavBackground>
  );
}
