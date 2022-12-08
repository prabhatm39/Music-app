import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useSearchParams } from "react-router-dom";
import styled from "styled-components";
import { getMusicRecord } from "../Redux/AppRedux/action";

export const MusicsRecords = () => {
  const dispatch = useDispatch();
  const musicRedores = useSelector((store) => store.AppRedux.musicRedores);
  const [searchParam] = useSearchParams();
  const location = useLocation();
  const sortBy = searchParam.get("sortBy");

  useEffect(() => {
    if (location || musicRedores.length == 0) {
      const queryParams = {
        params: {
          genre: searchParam.getAll("genre"),
          _sort: sortBy && "year",
          _order: sortBy,
        },
      };
      dispatch(getMusicRecord(queryParams));
    }
  }, [location.search]);
  // console.log(musicRedores);
  // console.log(location)
  return (
    <>
      {musicRedores.length > 0 &&
        musicRedores.map((album) => {
          return (
            <MusicRecordWrapper key={album.id}>
              <Link to={`/music/${album.id}`}>
                <div>{album.name}</div>
                <div>
                  <img src={album.img} />
                </div>
                <div>{album.genre}</div>
                <div>{album.year}</div>
              </Link>
            </MusicRecordWrapper>
          );
        })}
    </>
  );
};

const MusicRecordWrapper = styled.div`
  width: 300px;
  border: 1px solid green;
`;
