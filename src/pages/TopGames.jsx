import React, { useEffect, useState } from "react";
import { httpClient, httpTwitch } from "../config";
import Card from "../components/Card";

export default function Games() {
  const [topGames, setTopGame] = useState([]);

  function getElement() {
    httpClient
      .post()
      .then((res) => {
        const twitchCategory = "https://api.twitch.tv/helix/games/top";

        const twitchCliente = httpTwitch(twitchCategory, res.data.access_token);

        twitchCliente
          .get()
          .then((response) => {
            setTopGame(response.data.data);
          })
          .catch((error) => {
          });
      })
     
  }

  useEffect(() => {
    getElement();
  }, [topGames]);

  return (
    <div className="flex-col w-11/12 min-h-screen flex justify-center items-center md:justify-start">
      <div className="w-11/12 mt-20 mb-20 flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold text-white mb-6 justify-center items-center">
          {" "}
          TOP GAMES{" "} 
        </h1>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {topGames.map((game) => (
            <Card key={game.id} game={game} />
          ))}
        </div>
      </div>
    </div>
  );
}
