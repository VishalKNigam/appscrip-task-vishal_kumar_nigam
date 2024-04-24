"use client";

import { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";

export default function AddToFavouritesBtn() {
  const [isFavourite, setIsFavourite] = useState(false);

  const toggleFavourite = () => setIsFavourite(!isFavourite);

  return (
    <button
      type="button"
      className={`add-favourites-btn ${isFavourite ? "favourite" : ""}`}
      onClick={toggleFavourite}
    >
      <IoHeartOutline />
    </button>
  );
}
