import { GameData } from "./type";

const Ratings = ({ game }: { game: GameData | undefined }) => {
	return (
		<div className="flex sm:flex-row 2xl:flex-row xl:flex-col flex-col items-center ratings sm:justify-around text-white">
			{game?.metacritic && (
				<a
					href={game?.metacritic_url}
					className="flex gap-3 w-[310px] relative pr-10 pl-4 py-10 mt-3 items-center h-28 bg-black rounded-xl"
				>
					<img
						alt="metacritic logo"
						width={"60px"}
						src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Metacritic.svg/800px-Metacritic.svg.png"
					/>
					<p className="font-bold text-lg tracking-widest">METASCORE</p>
					<div className="bg-green-500 text-black h-16 aspect-square text-3xl font-extrabold rounded-lg flex items-center justify-center">
						{game?.metacritic}
					</div>
				</a>
			)}
			{game?.rating && (
				<a
					href={game?.metacritic_url}
					className="flex gap-4 w-[310px] relative pl-4 py-10 mt-3 items-center h-28 bg-black rounded-xl"
				>
					<p className="text-6xl flex-0 font-bold">R</p>
					<p className="font-bold flex-1 text-lg tracking-widest">
						RAWG Rating
					</p>
					<div className="bg-green-500 text-black h-16 aspect-square text-2xl mr-5 font-extrabold rounded-full flex items-center justify-center">
						{game?.rating}
					</div>
				</a>
			)}
		</div>
	);
};

export default Ratings;
