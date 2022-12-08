import React from "react";
import { Route, Routes } from "react-router-dom";
import { ReqAuth } from "../Component/ReqAuth";
import { EditMusicRecord } from "./EditMusicRecord";
import { HomePage } from "./HomePage";
import { Login } from "./Login";
import { MusicsRecords } from "./MusicsRecords";
import { SingleMusicRecord } from "./SingleMusicRecord";

export const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/music/:id" element={
        <ReqAuth>
        <SingleMusicRecord />
         </ReqAuth>
        } />
        <Route path="/music/:id/edit" element={<EditMusicRecord />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<h3>Page Not Found</h3>} />
      </Routes>
    </div>
  );
};
