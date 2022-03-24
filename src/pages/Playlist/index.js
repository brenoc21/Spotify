import React from "react";
import Player from "../../components/Player";
import PlaylistNavbarLayout from "../../components/PlaylistNavbarLayout";
import SongCard from "../../components/SongCard";
import { ContentArea, PlaylistBG, CardArea } from "./styles";

import picture from "../../assets/Zoro.png";
export default function Playlist() {
  return (
    <PlaylistBG>
      <PlaylistNavbarLayout></PlaylistNavbarLayout>
      <Player picture={picture}></Player>
      <ContentArea>
        <CardArea>
          <SongCard picture={picture} title="Ronin" artist="Zoro"></SongCard>
        </CardArea>
      </ContentArea>
    </PlaylistBG>
  );
}
