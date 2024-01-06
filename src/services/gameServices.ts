import axios from "axios";

const baseUrl =
	"https://rawg.io/api/games?key=732af35de7c848489a06ffe4343ee934";

const getGame = async (gameName: string) => {
	const games = await axios
		.get(`${baseUrl}&search=${gameName}`)
		.then((xdd) => xdd.data);
	return games;
};

const getGameByID = async (gameID: string) => {
	const games = await axios
		.get(
			`https://rawg.io/api/games/${gameID}?key=732af35de7c848489a06ffe4343ee934`,
		)
		.then((xdd) => xdd.data);
	return games;
};

const getGameVideo = async (gameID: number) => {
	const vid = await axios
		.get(`http://localhost:3000/api/video/${gameID}`)
		.then((xdd) => xdd.data);
	console.log(vid);

	return vid;
};

const getGameScreenShots = async (gameID: string) => {
	const games = await axios
		.get(
			`https://rawg.io/api/games/${gameID}/screenshots?key=732af35de7c848489a06ffe4343ee934`,
		)
		.then((xdd) => xdd.data);
	return games;
};

const getNewGames = async () => {
	const games = await axios.get(`${baseUrl}`).then((game) => game.data);
	return games;
};

export default {
	getGame,
	getNewGames,
	getGameByID,
	getGameScreenShots,
	getGameVideo,
};
