import "./FavoriteButton.css";
import StarFilled from "./star-filled.svg?react";
import Star from "./star.svg?react";
import { useState } from "react";

export default function FavoriteButton() {
  const [isFavorite, setIsFavourite] = useState(false);

  function handleFavoriteToggle() {
    setIsFavourite(!isFavorite);
  }

  return (
    <button
      className="favorite-button"
      onClick={handleFavoriteToggle}
      aria-label="favorite"
    >
      {isFavorite ? <StarFilled /> : <Star />}
    </button>
  );
}
