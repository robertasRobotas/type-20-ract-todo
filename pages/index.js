import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../components/Header/Header";
import { CardWrapper } from "../components/CardWrapper/CardWrapper";

const Home = () => {
  const [characters, setCharacters] = useState(null);

  const fetchCharacters = async () => {
    const results = await axios.get(
      "https://hp-api.onrender.com/api/characters"
    );

    setCharacters(results.data);
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div>
      <Header />
      <CardWrapper characters={characters} setCharacters={setCharacters} />
    </div>
  );
};

export default Home;
