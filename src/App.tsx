import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GamePage from "./GamePage";
import HomePage from "./components/HomePage";
import Navbar from "./components/navbar";
import { ThemeProvider } from "./components/theme-provider";

function App() {
	return (
		<Router>
			<ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
				<div className="text-white ">
					<div className="h-full">
						<Navbar />
						<Routes>
							<Route path="/" element={<HomePage />} />
							<Route path="/game/:id" element={<GamePage />} />
						</Routes>
					</div>
				</div>
			</ThemeProvider>
		</Router>
	);
}

export default App;
