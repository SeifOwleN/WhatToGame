import { SyntheticEvent, useState } from "react";
import gameServices from "../../services/gameServices";
import { useAppDispatch } from "../../app/hooks";
import { setSearch } from "../../slices/gameSlice";

const Search = () => {
  const [game, setGame] = useState<string>("");
  const dispatch = useAppDispatch();

  const search = async (e: SyntheticEvent) => {
    e.preventDefault();
    const results = await gameServices.getGame(game);
    dispatch(setSearch(results));
    setGame("");
  };

  return (
    <div className="mr-20">
      <form onSubmit={search}>
        <input
          className="w-96 h-10 rounded-2xl p-4 text-black"
          value={game}
          onChange={(x) => setGame(x.target.value)}
        />
      </form>
    </div>
  );
};

export default Search;
