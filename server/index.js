import { log } from "console";
import cors from "cors";
import express, { response } from "express";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;
const baseURL =
	"https://rawg.io/api/games?key=6475c8f246db4df1933be6aceaa55806";

app.get("/api/video/:id", async (req, res) => {
	const id = req.params.id;
	const xdd = await fetch(
		`https://rawg.io/api/games/${id}/movies?key=6475c8f246db4df1933be6aceaa55806`,
	).then((res) => res.json());
	console.log(xdd);
	res.json(xdd);
});

app.listen(PORT, () => {
	console.log(PORT);
});
