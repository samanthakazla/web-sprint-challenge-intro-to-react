// Write your Character component here
import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Char = styled.div`
  display: column;
  column-count: 2;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: black;
  font-size: 1.5rem;
  border-radius: 2rem;
  padding: 1rem;
  margin: 0.5rem;
  width: 80%;
  background-color: #9bd9fa;
  img {
    width: 50%;
    height: auto;
  }
`;



const CharDetails = styled.div`
  display: column;
  max-width: 100%;
  font-size: 2rem;
  h2 {
      font-size: 2.5rem;
  }
  h2:hover {
      color: #223899;
      transition: 2s;
  }
`;

const Status = styled.h3`
    color: green;
    color: ${(param) => param.alert ? "red" : "green"};
`;

const Character = (props) => {
  const { characterData } = props;

  return (
    <Char>
      <img src={characterData.image} alt={`${characterData.name}`}></img>
      <CharDetails>
        <h2> Name: {characterData.name} </h2>
        <Status alert={characterData.status === "Dead"}> Status: {characterData.status} </Status>
        <h3> Species: {characterData.species} </h3>
        <h3> Location: {characterData.location.name} </h3>
      </CharDetails>
      <div></div>
    </Char>
  );
};

export default Character;
