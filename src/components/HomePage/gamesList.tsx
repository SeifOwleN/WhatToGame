import { results } from "../../slices/gameSlice";

const GamesList = ({ games }: { games: results }) => {
  console.log(games.name, games);
  return (
    <div className="w-96 mt-10 h-[350px] mr-20 flex flex-col rounded-3xl overflow-hidden hover:transform hover:scale-110 transition-transform border-white border ">
      <img src={games.background_image} className="w-full" />
      <div className="flex items-center px-6 h-full text-xl ">
        <p>{games.name}</p>
      </div>
    </div>
  );
};

export default GamesList;
