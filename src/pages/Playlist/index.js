import React from "react";
import Player from "../../components/Player";
import PlaylistNavbarLayout from "../../components/PlaylistNavbarLayout";
import SongCard from "../../components/SongCard";
import { ContentArea, CardArea } from "./styles";

import picture from "../../assets/Zoro.png";
import Layout from "../../components/Layout";
import { useNavigate } from "react-router-dom";
export default function Playlist() {
  const navigate = useNavigate();
  return (
    <Layout>
      <ContentArea>
        <CardArea>
          <SongCard
            onClick={() => navigate("/home")}
            picture={picture}
            title="Ronin"
            artist="Zoro"
          ></SongCard>
        </CardArea>
      </ContentArea>
    </Layout>
  );
}
