import {
	FaAndroid,
	FaApple,
	FaGlobe,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { results } from "../../types";
import { Card, CardContent, CardHeader } from "../ui/card";

const GamesList = ({ games }: { games: results }) => {
	const platformIcons = () => {
		const arr: string[] = [];
		const icons: JSX.Element[] = [];

		Object.entries(games.platforms).map(([_, { platform }]) => {
			platform.slug.includes("playstation") && arr.push("playstation");
			platform.slug.includes("xbox") && arr.push("xbox");
			platform.slug.includes("pc") && arr.push("pc");
			platform.slug.includes("ios") && arr.push("ios");
			platform.slug.includes("android") && arr.push("android");
			platform.slug.includes("web") && arr.push("web");
		});
		if (arr.includes("playstation")) {
			icons.push(<FaPlaystation className="mb-1" />);
		}
		if (arr.includes("xbox")) {
			icons.push(<FaXbox className="mb-1" />);
		}
		if (arr.includes("pc")) {
			icons.push(<FaWindows className="mb-1" />);
		}
		if (arr.includes("ios")) {
			icons.push(<FaApple className="mb-1" />);
		}
		if (arr.includes("android")) {
			icons.push(<FaAndroid className="mb-1" />);
		}
		if (arr.includes("web")) {
			icons.push(<FaGlobe className="mb-1" />);
		}

		return icons;
	};

	return (
		<Link to={`/game/${games.id}`}>
			<Card className="w-96 relative mt-10 h-[350px] mr-10 flex flex-col rounded-3xl overflow-hidden hover:transform hover:scale-110 transition-transform ">
				<div className="absolute right-3 mix-blend-difference top-2">
					{platformIcons()}
				</div>
				<img
					alt={games.name}
					src={games.background_image}
					className="min-h-[240px] object-cover"
				/>
				<CardContent className="flex justify-center flex-col px-6 h-full text-xl text-white ">
					<p>{games.name}</p>
					<p className="text-xs text-gray-400">{games.rating}</p>
				</CardContent>
			</Card>
		</Link>
	);
};

export default GamesList;
