import gameServices from "@/services/gameServices";
import { useEffect } from "react";
import { GameData } from "./type";

const Stores = ({ game }: { game: GameData }) => {
	useEffect(() => {
		(async () => {
			const xdd = await gameServices.getGameStores(game.id);
			console.log("true", xdd);
		})();
	}, [game]);

	return (
		<div>
			<p>xdd</p>
		</div>
	);
};

export default Stores;
