import React from "react";
import styled from "styled-components";
import { FilterSort } from "../Component/FilterSort";
import { MusicsRecords } from "./MusicsRecords";

export const HomePage = () => {
  return (
    <HomepageWrapper>
      <FilterSortWrapper>
        <FilterSort />
      </FilterSortWrapper>
      <MusicRecorderWrapper>
        <MusicsRecords />
      </MusicRecorderWrapper>
    </HomepageWrapper>
  );
};

//-----------------------------**style**-------------------------------------//
const HomepageWrapper = styled.div`
  display: flex;
`;
const FilterSortWrapper = styled.div`
  width: 200px;
  border: 1px solid red;
`;

const MusicRecorderWrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, max-content));
  justify-content: center;
  grid-gap: 10px;
`;
