import gameServices from "@/services/gameServices";
import parse from "html-react-parser";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Images from "./Images";
import Platforms from "./Platforms";
import { GameData, GameScreenshot } from "./type";

const GamePage = () => {
	const id = useParams().id;
	const [game, setGame] = useState<GameData>();
	const [gameSS, setGameSS] = useState<GameScreenshot>();

	useEffect(() => {
		const getGame = async () => {
			console.log("id", id);
			const game = await gameServices.getGameByID(id as string);
			console.log("game", game);
			setGame(game);
		};

		const getGameScreenShots = async () => {
			const gameSS = await gameServices.getGameScreenShots(id as string);
			setGameSS(gameSS);
		};

		getGameScreenShots();
		getGame();
	}, [id]);

	// const renderStores = () => {
	// 	if (game) {
	// 		const stores = game?.stores;
	// 		return (
	// 			<div className="">
	// 				<h2>Available On:</h2>
	// 				<div className="flex">
	// 					{stores.map(({ store }) => (
	// 						<>{store.name}</>
	// 					))}
	// 				</div>
	// 			</div>
	// 		);
	// 	}
	// };

	return (
		<div className="xl:flex block xl:ml-16 sm:m-4">
			<div className="">
				<h2 className="text-2xl font-bold">Game Preview</h2>
				<br />
				<Images gameSS={gameSS as GameScreenshot} game={game as GameData} />
			</div>
			<div className="xl:m-12 mt-6 content ">
				<div className="lg:flex justify-between mr-4">
					<p className="font-extrabold text-5xl">{game?.name}</p>
					<div className="text-6xl gap-3 items-center text-gray-300 flex">
						<Platforms games={game as GameData} />
					</div>
				</div>
				<p className="text-gray-400 m-2">
					{game
						? parse(
								game.description.slice(0, game.description.indexOf("Español")),
						  )
						: null}
				</p>

				<div className="flex m-4 justify-between">
					<p>Published By: {game?.publishers[0].name}</p>
					<p>
						Developed By:{" "}
						{game?.developers.map((dev, index, array) => (
							<Fragment key={dev.id}>
								{dev.name}
								{index < array.length - 1 && ", "}
							</Fragment>
						))}
					</p>
					<p>Release Date: {game?.released}</p>
				</div>
				<div className="flex sm:flex-row flex-col items-center ratings sm:justify-around">
					<a
						href={game?.metacritic_url}
						className="flex gap-3 w-72 relative pr-10 pl-4 py-10 mt-3 items-center h-32"
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
					</a>{" "}
					<a
						href={game?.metacritic_url}
						className="flex gap-4 w-72 relative pl-4 py-10 mt-3 items-center h-32"
					>
						<p className="text-6xl flex-0 font-bold">R</p>
						<p className="font-bold flex-1 text-lg tracking-widest">
							RAWG Rating
						</p>
						<div className="bg-green-500 text-black h-16 aspect-square text-2xl font-extrabold rounded-full flex items-center justify-center">
							{game?.rating}
						</div>
					</a>
				</div>
				<div />
			</div>
		</div>
	);
};

export default GamePage;
