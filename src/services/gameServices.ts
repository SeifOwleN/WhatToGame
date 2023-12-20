import axios from "axios";

const baseUrl =
  "https://rawg.io/api/games?key=6475c8f246db4df1933be6aceaa55806";

const getGame = async (gameName: string) => {
  const games = await axios
    .get(`${baseUrl}&search=${gameName}`)
    .then((xdd) => xdd.data);
  return games;
};

const getNewGames = async () => {
  const games = await axios.get(`${baseUrl}`).then((game) => game.data);
  return games;
};

export default { getGame, getNewGames };
