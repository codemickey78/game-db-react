import React, { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../GameCard/GameCard";

const List = () => {
  const [games, setGames] = useState([]);
  const [nextPage, setNextPage] = useState("");

  const getGames = (reqType) => {
    console.log(reqType);
    if (reqType === "first") {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}`
        )
        .then((res) => {
          setGames(res.data.results);
          setNextPage(res.data.next);
          console.log(res.data.results);
        });
    } else {
      axios.get(nextPage).then((res) => {
        setGames(games.concat(res.data.results));
        setNextPage(res.data.next);
        console.log("loaded count");
      });
    }
  };

  useEffect(() => {
    getGames("first", "");
  }, []);

  return (
    <>
      <div className="w-full pb-5">
        <div className="grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-6 ">
          {games.map((game) => (
            <React.Fragment key={game.name}>
              <GameCard game={game} />
            </React.Fragment>
          ))}
        </div>
        <div className="flex items-center justify-center my-5">
          <button
            className="p-2 px-4 bg-black text-white rounded-md"
            onClick={() => getGames("more")}
          >
            Load More
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
