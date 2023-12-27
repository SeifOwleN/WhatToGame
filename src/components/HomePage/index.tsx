import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gameServices from "../../services/gameServices";
import { Games, results } from "../../types";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import GamesList from "./gamesList";

const HomePage = () => {
	const location = useLocation();
	const [game, setGame] = useState<Games>();
	const [sort, setSort] = useState<string | undefined>("");
	console.log("sort", sort);

	useEffect(() => {
		const fun = async () => {
			const search = new URLSearchParams(location.search);

			try {
				if (search.get("search")) {
					const gamesList = await gameServices.getGame(
						search.get("search") as string,
					);
					setGame(gamesList);
				} else {
					const gamesList = await gameServices.getNewGames();
					setGame(gamesList);
				}
			} catch (err) {
				console.error(err);
			}
		};
		fun();
	}, [location]);

	const SortMenu = () => {
		return (
			<Select value={sort} onValueChange={setSort}>
				<SelectTrigger className="w-[200px]">
					<SelectValue placeholder="Sort" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Sort By</SelectLabel>
						<SelectItem value="rating">Rating</SelectItem>
						<SelectItem value="added">Popularity</SelectItem>
						<SelectItem value="released">Release Date</SelectItem>
						<SelectItem value="playtime">PlayTime</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	};

	const renderGames = () => {
		if (game) {
			const search = new URLSearchParams(location.search);
			const theGame = search.get("search");
			console.log("game", game);
			return (
				<div className="flex flex-col">
					<div className="head flex justify-between">
						<h2 className="text-3xl mb-10 inline font-inter font-bold">
							{theGame
								? `Search Results for: ${theGame}`
								: "Games that are known and loved"}
						</h2>
						{SortMenu()}
					</div>

					<div className="flex flex-wrap">
						{Object.entries(game?.results)
							.sort(([, gameA], [, gameB]) => {
								return sort === "released"
									? new Date(gameB.released).getTime() -
											new Date(gameA.released).getTime()
									: // @ts-ignore
									  gameB[sort] - gameA[sort];
							})
							.map(([key, value]) => (
								<GamesList key={key} games={value} />
							))}
					</div>
				</div>
			);
		}
		return (
			<h2 className="text-3xl mx-24 mt-2 font-inter font-bold">No Results</h2>
		);
	};

	return <div className="flex flex-col m-10 ">{renderGames()}</div>;
};

export default HomePage;
