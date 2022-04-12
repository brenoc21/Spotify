import React from "react";
import Logo from "../Logo";
import { NavBackground, Options, OptionItem } from "./styles";
import home from "../../assets/home.svg";
import library from "../../assets/library.svg";
import like from "../../assets/likedSongs.svg";
import search from "../../assets/search.svg";
import create from "../../assets/createPlaylist.svg";

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
          <div id="createPlaylist">
            <img src={create} alt="create svg" />
          </div>
          Create
        </OptionItem>
        <OptionItem>
          <div id="likedSongs">
            <img src={like} alt="like svg" />
          </div>
          Liked Songs
        </OptionItem>
      </Options>
    </NavBackground>
  );
}
