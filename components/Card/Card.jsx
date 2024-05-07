import React from "react";
import styles from "./Card.module.css";

const Card = ({ id, name, species, image, dateOfBirth, setCharacters }) => {
  const removeCharacter = () => {
    setCharacters((prevState) =>
      prevState.filter((character) => character.id !== id)
    );
  };

  return (
    <div className={styles.main} onClick={removeCharacter}>
      <h2>{name}</h2>

      {image ? (
        <img src={image} alt="" />
      ) : (
        <div className={styles.noImage}>no image</div>
      )}

      <h5>{species}</h5>
      <h5>{dateOfBirth ? <>{dateOfBirth}</> : <>-</>}</h5>
    </div>
  );
};

export default Card;
