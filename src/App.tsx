import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamePage from "./GamePage";
import Achievements from "./GamePage/Achivements";
import HomePage from "./components/HomePage";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
	return (
		<Router>
			<ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
				<div className="dark:text-white ">
					<div className="h-full">
						<Navbar />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/game/:id" element={<GamePage />} />
							<Route path="/game/achievements/:id" element={<Achievements />} />
						</Routes>
					</div>
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;
