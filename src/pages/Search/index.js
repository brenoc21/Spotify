import React, { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import {
  Background,
  SearchBar,
  SearchBarContainer,
  SongItem,
  SongsContainer,
} from "./styles";
import api from "../../services/api";
import { useSong } from "../../context/songContext";

function Search() {
  const { reload, setReload } = useSong();
  const [artist, setArtist] = useState([]);
  const [title, setTitle] = useState([]);
  useEffect(() => {}, [reload]);
  
  function handleSearch(e) {
      if(e.target.value === ""){
          setArtist([])
          setTitle([])
      }
    api
      .get(`/track/name/${e.target.value}`)
      .then((res) => setTitle(res.data))
      .then(() => setReload(!reload))
      .catch((err) => console.log(err));
    api
      .get(`/track/author/${e.target.value}`)
      .then((res) => setArtist(res.data))
      .then(() => setReload(!reload))
      .catch((err) => console.log(err));
  }
  return (
    <Layout>
      <Background>
        <SearchBarContainer>
          <SearchBar
            placeholder="Search for Title or Artist"
            type="text"
            onChange={(e) => handleSearch(e)}
          />
        </SearchBarContainer>
        <SongsContainer>
          {title.map((song) => {
            return (
              <SongItem>
                <p>{song.title}</p>
                <p>{song.author}</p>
              </SongItem>
            );
          })}
          {artist.map((song) => {
            return (
              <SongItem>
                <p>{song.title}</p>
                <p>{song.author}</p>
              </SongItem>
            );
          })}
        </SongsContainer>
      </Background>
    </Layout>
  );
}

export default Search;
