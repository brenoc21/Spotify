import React, {useEffect, useRef, useState} from 'react';
import { useSong } from '../../context/songContext';
import { useUser } from '../../context/userContext';
import api from '../../services/api';

 import { BgModal, Input, ModalBody, Button } from './styles';

function EditPlaylistModal({onModalChange}) {
    let ref = useRef();
    const {ActivePlaylist, reload, setReload} = useSong()
    const {token} = useUser()
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
    const [title, setTitle] = useState()
    function handleEdit(){
        api.put(`/playlist/${ActivePlaylist}`, {name: title}, {headers: {authorization: token}})
        .then(()=> setReload(!reload))
        .then(()=> onModalChange(false))
        .catch((err) => alert(err))
    }
  return (
      <BgModal>
          <ModalBody ref={ref}>
            <Input type="text" placeholder='Title' onChange={(e)=> setTitle(e.target.value)}/>
            <Button onClick={()=> handleEdit()}>Edit</Button>
          </ModalBody>
          
      </BgModal>
  );
}

export default EditPlaylistModal;