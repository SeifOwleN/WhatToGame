import { Button } from "@/components/ui/button";
import { SyntheticEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";

const AchievementeButton = ({
	noAchieve,
	className,
}: { noAchieve: number; className: string }) => {
	const id = useParams().id;
	const nav = useNavigate();
	const searchAchievements = (e: SyntheticEvent) => {
		e.preventDefault();
		nav(`/game/achievements/${id}`);
	};

	return (
		<Button onClick={searchAchievements} className={className}>
			<p>Game Achievements</p>
			<p className="text-sm">{noAchieve} Achievements</p>
		</Button>
	);
};

export default AchievementeButton;
