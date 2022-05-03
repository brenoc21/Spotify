import {
  AddButton,
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
import EditPlaylistModal from "../../components/EditPlaylistModal";
import {BsFillTrashFill, BsPlusLg} from "react-icons/bs"
import AddSongModal from "../../components/AddSongModal";
import { useNavigate } from "react-router-dom";
export default function PlaylistQueue({ author, name, playlist }) {
  const {ActivePlaylist, active, setActive, reload, setReload} = useSong()
  const {token} = useUser()
  const [playlistData, setPlaylistData] = useState()
  const [tracks, setTracks]= useState([])
  const [isModalEdit, setModalEdit] = useState(false)
  const [isModalAdd, setModalAdd] = useState(false)
  const navigate = useNavigate()
  useEffect(()=>{
    api.get(`/playlist//${ActivePlaylist}`, token)
    .then((res)=> {
      setPlaylistData(res.data.name)
      setTracks(res.data.tracks)
    } )
    
    .catch((err) => console.log(err))
  },[reload])
  function DeletePlaylist(){
    api.delete(`/playlist/${ActivePlaylist}`, {headers: { authorization: `${token}` }})
    .then(()=> navigate("/playlists"))
    .catch(error => alert(error))
  }
  function DeleteTrack(id){
    api.put(`/playlist/track/remove/${ActivePlaylist}`, {track: id}, {headers: { authorization: `${token}` }})
    .then(()=> setReload(!reload))
    .catch((err)=> alert(err))
  }
  return (
    <Layout bg="var(--dark-third-color)">
      {isModalEdit ? <EditPlaylistModal onModalChange={setModalEdit}/> : null}
      {isModalAdd ? <AddSongModal onModalChange={setModalAdd}/> : null}
      <PlaylistBG>
          
        <Container>
          <PlaylistHeader>
            <p className="title">PLAYLISTS</p>
            
            <h1 onClick={()=>setModalEdit(true)}>{playlistData}</h1>
            
            <div>
              <p>{author} - {tracks.length}</p>
              <BsFillTrashFill className="trash" onClick={()=> DeletePlaylist()}/>
            </div>
            
          </PlaylistHeader>
          <AddButton > <BsPlusLg className="svg" onClick={()=> setModalAdd(true)}/></AddButton>
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
                      <td><BsFillTrashFill onClick={()=> DeleteTrack(music._id)}/></td>
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
