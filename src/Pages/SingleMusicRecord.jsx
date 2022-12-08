import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMusicRecord } from "../Redux/AppRedux/action";

export const SingleMusicRecord = () => {
  const { id } = useParams();
  const [currentMusicAlbum, setCurrentMusicAlbum] = useState({});
  const musicRedores = useSelector((store) => store.AppRedux.musicRedores);
  console.log("MR", musicRedores)
  const dispatch = useDispatch();

  useEffect(() => {
    if (musicRedores.length === 0) {
      dispatch(getMusicRecord());
    }
  }, [dispatch, musicRedores.length]);

  useEffect(() => {
    if (id) {
      const currentMusicAlbum = musicRedores.find((album) => album.id === id);
      currentMusicAlbum && setCurrentMusicAlbum(currentMusicAlbum);
    }
  }, [id, musicRedores]);
  // console.log("da",currentMusicAlbum);

  return (
    <div>
      <h1>Name: {currentMusicAlbum.name}</h1>
      <h3>Artist: {currentMusicAlbum.artist}</h3>
      <h3>Genre: {currentMusicAlbum.genre}</h3>
      <img src={currentMusicAlbum.img} />
      <h4>
        <Link to="/">Go Back</Link>
        <br/>
        <Link to={`/music/${id}/edit`}>Edit</Link>
      </h4>
    </div>
  );
};
