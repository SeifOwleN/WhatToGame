import { Button } from "@/components/ui/button";
import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { GameData } from "./type";

const Series = ({ game, className }: { game: GameData; className: string }) => {
	const nav = useNavigate();

	const searchSeries = async (e: SyntheticEvent) => {
		e.preventDefault();
		nav(`/?series=${game.id}`);
	};

	return (
		<Button onClick={searchSeries} className={className}>
			<p>Look Up Games From The Series</p>
		</Button>
	);
};

export default Series;
