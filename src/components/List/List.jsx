/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import axios from "axios";
import GameCard from "../GameCard/GameCard";
import Search from "../Search/Search";

const List = () => {
  const [games, setGames] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [dataFromChild, setDataFromChild] = useState("");

  const getGames = (reqType, searchTerm) => {
    if (reqType === "first" && searchTerm === "") {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}`
        )
        .then((res) => {
          setGames(res.data.results);
          setNextPage(res.data.next);
        });
    } else if (reqType === "search" && searchTerm !== "") {
      axios
        .get(
          `https://api.rawg.io/api/games?key=${process.env.REACT_APP_RAWG_API_KEY}&search='${searchTerm}'`
        )
        .then((res) => {
          setGames(res.data.results);
          setNextPage(res.data.next);
        });
    } else {
      axios.get(nextPage).then((res) => {
        console.log(res.data.results);
        setGames(games.concat(res.data.results));
        setNextPage(res.data.next);
      });
    }
  };

  useEffect(() => {
    getGames("first", "");
  }, []);

  useEffect(() => {
    // getGames("first", "");
    if (dataFromChild !== "") {
      getGames("search", dataFromChild);
    } else {
      getGames("first", "");
    }
  }, [dataFromChild]);

  return (
    <>
      <div className="w-full pb-5">
        <Search setDataFromChild={setDataFromChild} />
        <div className="grid md:grid-cols-3 xs:grid-cols-1 sm:grid-cols-2 gap-6 mt-4 ">
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
