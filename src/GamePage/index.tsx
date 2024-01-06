import gameServices from "@/services/gameServices";
import parse from "html-react-parser";
import { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AchievementeButton from "./Achivements/button";
import Images from "./Images";
import Platforms from "./Platforms";
import Ratings from "./Ratings";
import Series from "./Series";
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

	const AchAndSeries = () => (
		<>
			{game?.game_series_count && <Series game={game} className="w-64 h-16" />}
			{game?.achievements_count && (
				<AchievementeButton
					className="w-64 h-16"
					noAchieve={game.achievements_count}
				/>
			)}
		</>
	);

	return (
		<div className="flex xl:flex-row flex-col xl:ml-16 sm:m-4">
			<div className="flex flex-col">
				<h2 className="text-2xl font-bold mb-4">Game Preview</h2>
				<Images gameSS={gameSS as GameScreenshot} game={game as GameData} />
				<div className="xl:flex hidden justify-evenly mt-4">
					{AchAndSeries()}
				</div>
			</div>
			<div className="xl:ml-12 xl:mr-4 mt-6 content ">
				<div className="flex sm:flex-row flex-col gap-4 items-center justify-between mr-4">
					<p className="font-extrabold lg:text-start text-center text-5xl">
						{game?.name}
					</p>
					<div className="text-6xl gap-3 lg:mx-0 mx-4 items-center dark:text-gray-300 text-black flex">
						<Platforms games={game as GameData} />
					</div>
				</div>
				<div className="text-gray-400 m-2">
					{game
						? parse(
								game.description.slice(0, game.description.indexOf("Español")),
						  )
						: null}
				</div>

				<div className="flex m-4 gap-4 justify-between">
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
				<Ratings game={game} />
				<div className="xl:hidden sm:flex-row flex-col items-center gap-4 flex justify-evenly mt-4">
					{AchAndSeries()}
				</div>
			</div>
		</div>
	);
};

export default GamePage;
