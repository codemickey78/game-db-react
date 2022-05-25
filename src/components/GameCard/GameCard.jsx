import React from "react";

const GameCard = ({ game }) => {
  return (
    <div className="w-full p-4 rounded-lg font-bold shadow-md bg-gray-700  hover:bg-sky-500">
      <div className="w-full">
        <img
          src={game.background_image}
          alt={game.name}
          className="h-64 w-full mb-3 rounded-lg object-cover"
        />
      </div>
      <h1 key={game.name} className="text-white">{game.name}</h1>
      <p className="flex item-center justify-start gap-3 my-2">
        {game.genres.map((genre) => (
          <span
            className="px-2 py-1 rounded-3xl bg-gray-400 font-medium text-white text-sm"
            key={genre.id}
          >
            {genre.name}
          </span>
        ))}
      </p>
    </div>
  );
};

export default GameCard;
