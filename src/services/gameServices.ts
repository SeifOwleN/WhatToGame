import axios from "axios";

const baseUrl =
	"https://rawg.io/api/games?key=6475c8f246db4df1933be6aceaa55806";

const getGame = async (gameName: string) => {
	const games = await axios
		.get(`${baseUrl}&search=${gameName}`)
		.then((xdd) => xdd.data);
	return games;
};

const getGameByID = async (gameID: string) => {
	const games = await axios
		.get(
			`https://rawg.io/api/games/${gameID}?key=6475c8f246db4df1933be6aceaa55806`,
		)
		.then((xdd) => xdd.data);
	return games;
};

const getGameVideo = async (gameID: string) => {
	const vid = await axios
		.get(`http://localhost:3000/api/video/${gameID} `)
		.then((xdd) => xdd.data);
	console.log(vid);

	return vid;
};

const getGameScreenShots = async (gameID: string) => {
	const games = await axios
		.get(
			`https://rawg.io/api/games/${gameID}/screenshots?key=6475c8f246db4df1933be6aceaa55806`,
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
