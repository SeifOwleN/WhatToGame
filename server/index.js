import cors from "cors";
import express, { response } from "express";
const app = express();
app.use(cors());
app.use(express.json());
const PORT = 3000;
const baseURL =
	"https://rawg.io/api/games?key=732af35de7c848489a06ffe4343ee934";

app.get("/api/video/:id", async (req, res) => {
	const id = req.params.id;
	const xdd = await fetch(
		`https://rawg.io/api/games/${id}/movies?key=732af35de7c848489a06ffe4343ee934`,
	).then((res) => res.json());
	console.log(xdd, "aooo");
	res.json(xdd);
});

app.get("/api/achievements/:id", async (req, res) => {
	const id = req.params.id;
	const xdd = await fetch(
		`https://rawg.io/api/games/${id}/achievements?key=732af35de7c848489a06ffe4343ee934`,
	).then((res) => res.json());
	res.json(xdd);
});

app.listen(PORT, () => {
	console.log(PORT);
});
