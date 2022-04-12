import React from "react";
import SongCard from "../../components/SongCard";
import { ContentArea, PlaylistBG, CardArea } from "./styles";

import picture from "../../assets/Zoro.png";
import Layout from "../../components/Layout";
export default function Playlist() {
  return (
    <Layout bg='var(--dark-third-color)'>
        <ContentArea>
          <CardArea>
            <SongCard picture={picture} title="Ronin" artist="Zoro"></SongCard>
          </CardArea>
        </ContentArea>
    </Layout>
  );
}
