import React, { useEffect, useState, useRef } from "react";
import { httpClient, httpTwitch } from "../config";
import Card from "../components/Card";

export default function Search() {
  const [topGames, setTopGame] = useState([]);
  const inputSearch = useRef(null);

  function getElement(busqueda = "al") {
    httpClient
      .post()
      .then((res) => {
        console.log(res)
        const twitchCategory =
          "https://api.twitch.tv/helix/search/categories?query=" + busqueda;

        const twitchCliente = httpTwitch(twitchCategory, res.data.access_token);

        twitchCliente.get().then((response) => {
          
            setTopGame(response.data.data);
           
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  useEffect(() => {
    getElement();
  }, [setTopGame]);

  return (
    <div className="flex-col w-11/12  flex justify-center items-center md:justify-start">
      <div className="w-11/12 mt-20 mb-20 flex flex-col justify-center items-center">
        <div className=" flex w-full flex-wrap justify-center items-center">
          <h1 className="text-3xl font-bold text-white"> Search Game </h1>
          <input
            className="m-4 appearance-none border-transparentout outline-none rounded-md text-slate-900 w-9/12 p-5 focus:border-transparent focus:ring-0"
            placeholder="Game Name"
            type="search"
            onChange={() => getElement(inputSearch.current.value)}
            ref={inputSearch}
          />
        </div>
        <div className="grid grid-cols-2 gap-2 md:grid-cols-4">
          {topGames.map((game) => (
            <Card key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
