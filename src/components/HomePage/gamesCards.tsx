import { Link } from "react-router-dom";
import { results } from "../../types";
import PlatformIcons from "../platformIcons";
import { Card, CardContent } from "../ui/card";

const GamesCards = ({ games }: { games: results }) => {
	return (
		<Link className="mt-10 sm:mr-10" to={`/game/${games.id}`}>
			<Card className="sm:w-96 relative h-[350px] flex flex-col rounded-3xl overflow-hidden hover:transform hover:scale-110 transition-transform ">
				<div className="absolute right-3 mix-blend-difference top-2">
					<PlatformIcons games={games} />
				</div>
				<img
					alt={games.name}
					src={games.background_image}
					className="min-h-[240px] object-cover"
				/>
				<CardContent className="flex justify-center flex-col px-6 h-full text-xl text-white ">
					<p>{games.name}</p>
					<p className="text-xs text-gray-400">
						{games.rating} · {games.released.slice(0, 4)}{" "}
					</p>
				</CardContent>
			</Card>
		</Link>
	);
};

export default GamesCards;
