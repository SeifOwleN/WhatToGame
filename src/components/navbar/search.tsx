import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "../ui/input";

const SearchBar = () => {
	const [game, setGame] = useState<string>("");
	const nav = useNavigate();
	const searchxdd = async (e: SyntheticEvent) => {
		e.preventDefault();
		nav(`/?search=${game}`);
		setGame("");
	};

	return (
		<div className="flex-1">
			<form onSubmit={searchxdd}>
				<Input
					className="w-full h-15 rounded-lg border-0 px-5 text-lg dark:text-white  "
					placeholder="Search Your Favorite Game"
					value={game}
					onChange={(x) => setGame(x.target.value)}
				/>
			</form>
		</div>
	);
};

export default SearchBar;
