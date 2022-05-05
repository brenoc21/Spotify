import React, { useState } from "react";
import Logo from "../Logo";
import { NavBackground, Options, OptionItem } from "./styles";
import home from "../../assets/home.svg";
import library from "../../assets/Library.svg";
import like from "../../assets/LikedSongs.svg";
import search from "../../assets/Search.svg";
import create from "../../assets/CreatePlaylist.svg";
import EditProfileModal from "../EditProfileModal";
import api from "../../services/api";
import { useUser } from "../../context/userContext";
import { useSong } from "../../context/songContext";
import { useNavigate } from "react-router-dom";
import {ImExit} from "react-icons/im"

export default function PlaylistNavbarLayout() {
  const [isEditModal, setEditModal] = useState(false)
  const {token, setUserId,  setNick, setToken} = useUser()
  const {reload, setReload} = useSong()
  const navigate = useNavigate()
  function handleCreatePlaylist(){
    api.post("/playlist", {name: "My playlist"}, {headers: { authorization: `${token}` }})
    .then(_=> setReload(!reload))
    .catch(err => alert(err))
  }
  function handleLogout(){
    navigate("/", {replace: true})
    setUserId("")
    setNick("")
    setToken("")
    localStorage.clear()
  }
  return (
    <NavBackground>
      {isEditModal ? <EditProfileModal onModalChange={setEditModal}/> : null}
      <div className="LogoContainer">
        <Logo type="footer" path="/playlist"></Logo>
      </div>
      <Options>
        <OptionItem onClick={()=> navigate("/playlist")}>
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
        <OptionItem onClick={_ => handleLogout()}>
            <ImExit className="leave"/>
          Logout
        </OptionItem>
        <br />
        <OptionItem onClick={()=> handleCreatePlaylist()}>
          <div id="createPlaylist" >
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
