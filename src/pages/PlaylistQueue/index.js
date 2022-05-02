import {
  Container,
  PlaylistBG,
  PlaylistBody,
  PlaylistHeader,
  PlaylistPlayerDiv,
  Table,
} from "./styles";
import play from "../../assets/play.svg";
import Layout from "../../components/Layout";
import { useEffect, useState } from "react";
import api from "../../services/api";
import { useSong } from "../../context/songContext";
import { useUser } from "../../context/userContext";

export default function PlaylistQueue({ author, name, playlist }) {
  const {ActivePlaylist, active, setActive} = useSong()
  const {token} = useUser()
  const {playlistData, setPlaylistData} = useState()
  const [tracks, setTracks]= useState([])
  useEffect(()=>{
    api.get(`/playlist//${ActivePlaylist}`, token)
    .then((res)=> {
      console.log(res.data)
      setTracks(res.data.tracks)
    })
    
    .catch((err) => console.log(err))
  },[])
  return (
    <Layout bg="var(--dark-third-color)">
      <PlaylistBG>
        <Container>
          <PlaylistHeader>
            <p className="title">PLAYLISTS</p>
            <h1>{name}</h1>
            {/* <h1>{playlistData.name}</h1> */}
            <div>
              <p>{author} - {tracks.length}</p>
            </div>
          </PlaylistHeader>
          <PlaylistPlayerDiv>
            <button className="play">
              <img src={play} />
            </button>
          </PlaylistPlayerDiv>
          <PlaylistBody>
            <Table>
              <table className="table">
                <thead>
                  <th>#</th>
                  <th>TÍTULO</th>
                  <th>ARTISTA</th>
                  <th>ÁLBUM</th>
                </thead>
                <tbody>
                  {tracks.map((music, index) => (
                    <tr onClick={()=> setActive(music.path)} id={music._id} key={music._id}>
                      <td>{index + 1}</td>
                      <td><p className="text">{music.title}</p></td>
                      <td><p className="text">{music.author}</p></td>
                      <td><p className="text">{music.album}</p></td>
                      <td>
                        <audio controls>
                          <source src={music.path} type="audio/wav" />
                        </audio>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Table>
          </PlaylistBody>
        </Container>
      </PlaylistBG>
    </Layout>
  );
}
