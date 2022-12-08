import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getMusicRecord, updateMusicRecord } from '../Redux/AppRedux/action';


export const EditMusicRecord = () => {
  const {id}  = useParams();
  const dispatch = useDispatch();
  const navitage = useNavigate();
  const musicRedores = useSelector((store) => store.AppRedux.musicRedores)
  const [musicName, setMusicName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  const [currentNoOfSong, setCurrentNoOfSong] = useState('');
  
  console.log(musicRedores)
  const handleSubmit = (e) => {
    e.preventDefault();
    if(musicName && artistName){
      const payload = {
        name: musicName,
        artist: artistName
      }
      dispatch(updateMusicRecord(id, payload))
      .then(() => {
       dispatch(getMusicRecord()) ;
      })
    }
  }
  

  useEffect(() => {
    if (id) {
      const currentMusic = musicRedores.find((album) => album.id === id);
      currentMusic && setCurrentMusicAlbum(currentMusic);
    }
  }, [id, musicRedores]);
  

  console.log(currentMusicAlbum)
  
  return (
    <div>
      <h1>Edit Page</h1>
      <form onSubmit={handleSubmit}>
      <div>
        <label>Edit Music Name : </label>
        <input onChange={(e) => setMusicName(e.target.value)} value={musicName} />
      </div>
      <div>
        <label>Edit Artist Name : </label>
        <input onChange={(e) => setArtistName(e.target.value)} value={artistName} />
      </div>
      <div>
        <label>No of Songs : </label>
        <input onChange={(e) => setCurrentNoOfSong(e.target.value) } value={currentNoOfSong} />
      </div>
      <button type='submit'>Update</button>
      </form>
      <Link to="/">Go To Home Page</Link>
    </div>
  )
}
