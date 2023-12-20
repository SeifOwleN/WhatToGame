import { useEffect, useState } from "react";
import { useAppSelector } from "../../app/hooks";
import gameServices from "../../services/gameServices";
import { results } from "../../slices/gameSlice";
import GamesList from "./gamesList";
import Search from "./search";

const HomePage = () => {
  const games = useAppSelector((state) => state.search.value);
  const [game, setGame] = useState();
  useEffect(() => {
    const fun = async () => {
      try {
        const aloo = await gameServices.getNewGames();
        setGame(aloo);
      } catch (err) {
        console.error(err);
      }
    };
    fun();
  }, []);

  const renderGames = () => {
    if (games.results) {
      return (
        <div>
          <h2 className="text-3xl mb-10 font-inter font-bold">
            Search Results
          </h2>
          <div className="flex flex-wrap">
            {Object.entries(games.results)
              .sort((b, a) => {
                return a[1].added - b[1].added;
              })
              .map(([key, value]) => (
                <GamesList key={key} games={value} />
              ))}
          </div>
        </div>
      );
    }

    if (game) {
      return (
        <div className="flex flex-col">
          <h2 className="text-3xl mb-10 font-inter font-bold">
            Games that are known and loved
          </h2>
          <div className="flex flex-wrap">
            {Object.entries(game.results).map(([key, value]) => (
              <GamesList key={key} games={value} />
            ))}
          </div>
        </div>
      );
    }
    return <div className="mr-20"> No Results </div>;
  };

  return (
    <div className="mt-10 flex flex-col items-end ml-96 mr-32">
      <Search />
      <div className="flex flex-wrap mt-10">{renderGames()}</div>
    </div>
  );
};

export default HomePage;
