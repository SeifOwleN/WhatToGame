import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import gameServices from "../../services/gameServices";
import { Games } from "../../types";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "../ui/select";
import GamesCards from "./gamesCards";

const HomePage = () => {
	const location = useLocation();
	const [game, setGame] = useState<Games>();
	const [sort, setSort] = useState<string | undefined>("added");
	const [isEndOfPage, setIsEndOfPage] = useState(false);

	// useEffect to fetch the searched games from the api when location changes
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

	useEffect(() => {
		const fun = async () => {
			console.log("isEndOfPage", isEndOfPage);
			if (isEndOfPage && game) {
				const { data }: { data: Games } = await axios.get(game?.next as string);
				setGame({ ...data, results: game.results.concat(data.results) });
				console.log("game", game);
				setIsEndOfPage(false);
			}
		};
		fun();
	}, [isEndOfPage, game]);

	useEffect(() => {
		const handleScroll = () => {
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;
			const scrollTop = window.scrollY;

			// Check if the user has scrolled to the end of the page
			if (windowHeight + scrollTop === documentHeight) {
				setIsEndOfPage(true);
			} else {
				setIsEndOfPage(false);
			}
		};

		// Attach the scroll event listener
		window.addEventListener("scroll", handleScroll);

		// Cleanup the event listener on component unmount
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	// sort games select element
	const SortMenu = () => {
		return (
			<Select value={sort} onValueChange={setSort}>
				<SelectTrigger className="w-[200px] text-white">
					<SelectValue placeholder="aloo" />
				</SelectTrigger>
				<SelectContent>
					<SelectGroup>
						<SelectLabel>Sort By</SelectLabel>
						<SelectItem value="added">Popularity</SelectItem>
						<SelectItem value="rating">Rating</SelectItem>
						<SelectItem value="released">Release Date</SelectItem>
						<SelectItem value="playtime">PlayTime</SelectItem>
					</SelectGroup>
				</SelectContent>
			</Select>
		);
	};

	// function responsible of rendering the games
	const renderGames = () => {
		if (game) {
			const search = new URLSearchParams(location.search);
			const theGame = search.get("search");
			return (
				<div className="flex flex-col">
					<div className="head flex justify-between">
						<h2 className="text-3xl mb-10 inline font-inter font-bold">
							{theGame ? `Search Results for: ${theGame}` : "Popular Games"}
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
								<GamesCards key={key} games={value} />
							))}
					</div>
				</div>
			);
		}
		return (
			<h2 className="text-3xl mx-24 mt-2 font-inter font-bold">No Results</h2>
		);
	};

	return <div className="flex flex-col sm:m-10 m-2">{renderGames()}</div>;
};

export default HomePage;
