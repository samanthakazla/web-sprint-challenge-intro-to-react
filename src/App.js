import Axios from "axios";
import React, { useState, useEffect } from "react";
import styled from "styled-components"
import "./App.css";
import Character from "./components/Character";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    font-size: 5rem;
  }
  font-family: 'Gugi';
  font-size: 15px;

`

const App = () => {
  const [charactersData, setCharacterData] = useState([]);
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    Axios.get("https://rickandmortyapi.com/api/character/1,3,10,128,80,7,98") //
      .then((res) => {
        setCharacterData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <Wrapper className="App">
    <h1 className="Header"> Rick and Morty Characters</h1>

    {charactersData.map((characterIterationVar) => (
      <Character characterData={characterIterationVar} />
    ))}
  </Wrapper>
);
};

export default App;
