import React, { useState } from "react";
import Logo from "../Logo";
import { NavBackground, Options, OptionItem } from "./styles";
import home from "../../assets/home.svg";
import library from "../../assets/Library.svg";
import like from "../../assets/LikedSongs.svg";
import search from "../../assets/Search.svg";
import create from "../../assets/CreatePlaylist.svg";
import EditProfileModal from "../EditProfileModal";

export default function PlaylistNavbarLayout() {
  const [isEditModal, setEditModal] = useState(false)
  return (
    <NavBackground>
      {isEditModal ? <EditProfileModal onModalChange={setEditModal}/> : null}
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
        <OptionItem onClick={_ => setEditModal(true)}>
          <div id="likedSongs">
            <img src={like} alt="like svg"/>
          </div>
          Edit Profile
        </OptionItem>
      </Options>
    </NavBackground>
  );
}
