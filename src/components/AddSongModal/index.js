import React, {useEffect, useRef, useState} from 'react';
import { useSong } from '../../context/songContext';
import { useUser } from '../../context/userContext';
import api from '../../services/api';
import { TrackContainer } from './styles';

 import { BgModal, ModalBody } from './styles';

export default function AddSongModal({onModalChange}) {
    const {ActivePlaylist, setReload, reload} = useSong()
    const {token} = useUser()
    const [tracks, setTracks] = useState([])
    const [tracksTitle, setTracksTitle] = useState([])
    const [tracksAuthor, setTracksAuthor] = useState([])
    const [search, setSearch] = useState("")
    const [searchTitle, setSearchTitle] = useState()
    const [searchAuthor, setSearchAuthor] = useState()
    let ref = useRef();
    useEffect(()=> {
        setSearchAuthor(search);
        setSearchTitle(search)
    }, [search])
    useEffect(() => {
        let handler = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onModalChange(false);
                console.log(event.target);
            }
        };
        document.addEventListener("mousedown", handler);

        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);
    useEffect(()=> {
        search === "" ?
        api.get("/track").then((res)=> {
            setTracks(res.data)
        }).then(()=> setReload(!reload)).then(
            setTracksAuthor([]),
            setSearchTitle([])
        )
        : 
        api.get(`/track/name/${search}`).then(res=> {
            setTracksTitle(res.data)
        }).then(()=> setReload(!reload)).catch(err => {
            err.response.status == 404 ? 
            setTracksTitle([])
            : console.log(err.response)
        })
        api.get(`/track/author/${search}`).then(res => {
            setTracksAuthor(res.data)
        }).then(()=> setReload(!reload)).catch(err => {
            err.response.status == 404 ? 
            setTracksAuthor([])
            : console.log(err.response)
        })
    },[search])
    function handleAddClick(id){
        api.put(`/playlist/track/add/${ActivePlaylist}`, {track:id}, {headers: { authorization: `${token}` }})
        .then(_=> setReload(!reload))
        .catch((err)=> alert(err))
    }
  return (
      <BgModal>
          <ModalBody ref={ref}>
              <input className="searchbar" type="text" placeholder="Search your song for title or artist" onChange={(e)=> setSearch(e.target.value)}/>
            {search === "" ?  tracks.map((track)=> {
                return(
                    <TrackContainer>
                        <div className='trackItem'>{track.title}</div>
                        <div className='trackItem'>{track.album}</div>
                        <div className='trackItem'>{track.author}</div>
                        <button className='addButton' onClick={()=> handleAddClick(track._id)}>Add</button>
                    </TrackContainer>
                )
            }) : null}
            { search !== "" ? tracksTitle.map((track)=> {
                return(
                    <TrackContainer>
                        <div className='trackItem'>{track.title}</div>
                        <div className='trackItem'>{track.album}</div>
                        <div className='trackItem'>{track.author}</div>
                        <button className='addButton' onClick={()=> handleAddClick(track._id)}>Add</button>
                    </TrackContainer>
                )
            }): null}
            {search !== "" ? tracksAuthor.map((track)=> {
                return(
                    <TrackContainer>
                        <div className='trackItem'>{track.title}</div>
                        <div className='trackItem'>{track.album}</div>
                        <div className='trackItem'>{track.author}</div>
                        <button className='addButton' onClick={()=> handleAddClick(track._id)}>Add</button>
                    </TrackContainer>
                )
            }) : null}
          </ModalBody>
      </BgModal>
  );
}