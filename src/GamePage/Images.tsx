import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import gameServices from "@/services/gameServices";
import { useEffect, useState } from "react";
import { GameData, GameScreenshot } from "./type";

const Images = ({
	game,
	gameSS,
}: { game: GameData; gameSS: GameScreenshot }) => {
	const [videoURL, setVideoURL] = useState("");

	useEffect(() => {
		(async () => {
			const video = await gameServices.getGameVideo(game.id);
			console.log(video.results[0].data.max);

			setVideoURL(video.results[0]);
		})();
	}, [game]);

	return (
		<>
			<Carousel
				plugins={[WheelGesturesPlugin(), Autoplay({ delay: 10000 })]}
				className="xl:w-[700px] w-full aspect-video"
			>
				<CarouselContent>
					{videoURL && (
						<CarouselItem>
							<video
								id="my-player"
								className="video-js"
								preload="auto"
								poster={videoURL.preview}
								data-setup="{}"
								controls
							>
								xddMORS
							</video>
						</CarouselItem>
					)}

					<CarouselItem>
						<img
							className="sm:rounded-lg object-cover "
							src={game?.background_image}
							alt={`background of ${game?.name}`}
						/>
					</CarouselItem>
					{gameSS?.results.map((image) => (
						<CarouselItem key={image.id}>
							<img
								className="sm:rounded-lg object-cover"
								src={image.image}
								alt={`screenshot no ${image.id}`}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious className="hidden xl:flex" />
				<CarouselNext className="hidden xl:flex" />
			</Carousel>
		</>
	);
};

export default Images;
