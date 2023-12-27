import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import gameServices from "@/services/gameServices";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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

	const renderImages = () => {
		return (
			<Carousel className="w-[800px]">
				<CarouselContent>
					<CarouselItem>
						<img
							className="w-[800px] h-[500px]"
							src={game?.background_image}
							alt={`background of ${game?.name}`}
						/>
					</CarouselItem>
					{gameSS?.results.map((image) => (
						<CarouselItem key={image.id}>
							<img
								className="w-[800px] h-[500px]"
								src={image.image}
								alt={`screenshot no ${image.id}`}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
		);
	};

	return (
		<div className="flex ml-16">
			<div>
				<h2 className="text-2xl font-bold">Game Preview</h2>
				<br />
				{renderImages()}
			</div>
			<div className="m-12">
				<p className=" font-extrabold text-4xl">{game?.name}</p>
				<p className="ml-4 mt-2 text-gray-400">
					Release Date: {game?.released}
				</p>
			</div>
		</div>
	);
};

export default GamePage;
