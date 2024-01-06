import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Player from "@/components/vidPlayer/Player";
import gameServices from "@/services/gameServices";
import { Movie } from "@/types";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";
import { useEffect, useState } from "react";
import { GameData, GameScreenshot } from "./type";

const Images = ({
	game,
	gameSS,
}: { game: GameData; gameSS: GameScreenshot }) => {
	const [videoURL, setVideoURL] = useState<Movie[]>();

	useEffect(() => {
		(async () => {
			const video = await gameServices.getGameVideo(game?.id);
			setVideoURL(video.results);
		})();
	}, [game]);

	return (
		<>
			<Carousel
				plugins={[WheelGesturesPlugin(), Autoplay({ delay: 10000 })]}
				className="xl:w-[700px] w-full aspect-video"
			>
				<CarouselContent>
					{videoURL ? (
						<CarouselItem>
							<Player videoData={videoURL[0]} />
						</CarouselItem>
					) : null}

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
					{videoURL?.map((xdd) => (
						<CarouselItem key={xdd.id} className="relative">
							<Player videoData={xdd} />
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
