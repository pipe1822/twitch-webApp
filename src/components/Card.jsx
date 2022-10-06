import React from 'react';

function Card({ game }) {
  return (
    <div className="flex flex-col items-center">
      <img
        className="w-15 h-15 rounded-xl m-2"
        src={game.box_art_url
          .replace("{width}", 200)
          .replace("{height}", 200)}
        alt={game.name}
      />
      <p className="ml-4">{game.name}</p>
    </div>
  )
}

export default Card;
