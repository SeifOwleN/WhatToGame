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

const getGameStores = async (gameID: number) => {
	const stores = await axios.get(
		`https://rawg.io/api/games/${gameID}/stores?key=732af35de7c848489a06ffe4343ee934`,
	);
	return stores.data;
};

const getGameSeries = async (gameID: number) => {
	const stores = await axios.get(
		`https://rawg.io/api/games/${gameID}/game-series?key=732af35de7c848489a06ffe4343ee934`,
	);
	return stores.data;
};

const getGameVideo = async (gameID: number) => {
	const vid = await axios
		.get(`http://localhost:3000/api/video/${gameID}`)
		.then((xdd) => xdd.data);
	console.log(vid);

	return vid;
};

const getGameAchievements = async (gameID: number | string) => {
	const achievements = await axios
		.get(`http://localhost:3000/api/achievements/${gameID}`)
		.then((xdd) => xdd.data);
	console.log(achievements);

	return achievements;
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
	getGameStores,
	getGameSeries,
	getGameAchievements,
};
