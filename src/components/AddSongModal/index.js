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
    let ref = useRef();
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
        api.get("/track").then((res)=> {
            setTracks(res.data)
        })
    },[])
    function handleAddClick(id){
        api.put(`/playlist/track/add/${ActivePlaylist}`, {track:id}, {headers: { authorization: `${token}` }})
        .then(_=> setReload(!reload))
        .catch((err)=> alert(err))
    }
  return (
      <BgModal>
          <ModalBody ref={ref}>
            {tracks.map((track)=> {
                return(
                    <TrackContainer>
                        <div className='trackItem'>{track.title}</div>
                        <div className='trackItem'>{track.album}</div>
                        <div className='trackItem'>{track.author}</div>
                        <button className='addButton' onClick={()=> handleAddClick(track._id)}>Add</button>
                    </TrackContainer>
                )
            })}
          </ModalBody>
      </BgModal>
  );
}