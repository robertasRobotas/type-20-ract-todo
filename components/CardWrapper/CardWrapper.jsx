import React from "react";
import Spinner from "../../components/Spinner/Spinner";
import Card from "../Card/Card";
import styles from "./CardWrapper.module.css";

export const CardWrapper = ({ characters, setCharacters }) => {
  console.log(characters);

  return (
    <div>
      {characters ? (
        <div className={styles.cardsWrapper}>
          {characters.map((character) => (
            <Card
              key={character.id}
              id={character.id}
              name={character.name}
              species={character.species}
              image={character.image}
              dateOfBirth={character.dateOfBirth}
              setCharacters={setCharacters}
            />
          ))}
        </div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
