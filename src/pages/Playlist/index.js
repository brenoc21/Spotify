import React, { useEffect, useState } from "react";
import Player from "../../components/Player";
import PlaylistNavbarLayout from "../../components/PlaylistNavbarLayout";
import SongCard from "../../components/SongCard";
import { ContentArea, CardArea } from "./styles";

import picture from "../../assets/Zoro.png";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
import { useSong } from "../../context/songContext";
import api from "../../services/api";
import { useUser } from "../../context/userContext";
export default function Playlist() {
  const {ActivePlaylist, setActivePlaylist, reload } = useSong()
  const {userId, token, nick} = useUser()
  const [playlists, setPlaylists] = useState([])
  useEffect(()=> {
     api.get(`/playlist/user/${userId}`, token).then((res)=> setPlaylists(res.data)).catch((err)=> console.log(err))
  },[reload])
  return (
    <Layout>
      <ContentArea>
        <CardArea>
          {playlists.map((playlist) => {return(
            <SongCard 
            key={playlist._id}
            id={playlist._id}
            picture={picture}
            title={playlist.name}
            artist={nick}
          ></SongCard>
          )})}
        </CardArea>
      </ContentArea>
    </Layout>
  );
}
