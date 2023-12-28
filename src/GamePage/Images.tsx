import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { WheelGesturesPlugin } from "embla-carousel-wheel-gestures";

import { GameData, GameScreenshot } from "./type";

const Images = ({
	game,
	gameSS,
}: { game: GameData; gameSS: GameScreenshot }) => {
	return (
		<Carousel
			plugins={[WheelGesturesPlugin(), Autoplay({ delay: 10000 })]}
			className="w-[800px]"
		>
			<CarouselContent>
				<CarouselItem>
					<img
						className="rounded-lg object-cover h-[500px]"
						src={game?.background_image}
						alt={`background of ${game?.name}`}
					/>
				</CarouselItem>
				{gameSS?.results.map((image) => (
					<CarouselItem key={image.id}>
						<img
							className="object-cover h-[500px]"
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

export default Images;
