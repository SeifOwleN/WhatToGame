import { results } from "@/types";
import {
	FaAndroid,
	FaApple,
	FaGlobe,
	FaPlaystation,
	FaWindows,
	FaXbox,
} from "react-icons/fa";

const PlatformIcons = ({ games }: { games: results }) => {
	const arr: string[] = [];
	const icons: JSX.Element[] = [];

	Object.entries(games.platforms).map(([_, { platform }]) => {
		if (platform) {
			platform.slug.includes("playstation") && arr.push("playstation");
			platform.slug.includes("xbox") && arr.push("xbox");
			platform.slug.includes("pc") && arr.push("pc");
			platform.slug.includes("ios") && arr.push("ios");
			platform.slug.includes("android") && arr.push("android");
			platform.slug.includes("web") && arr.push("web");
		}
	});

	if (arr.includes("playstation")) {
		icons.push(<FaPlaystation key="ps" className="mb-1" />);
	}
	if (arr.includes("xbox")) {
		icons.push(<FaXbox key="xbox" className="mb-1" />);
	}
	if (arr.includes("pc")) {
		icons.push(<FaWindows key="pc" className="mb-1" />);
	}
	if (arr.includes("ios")) {
		icons.push(<FaApple key="ios" className="mb-1" />);
	}
	if (arr.includes("android")) {
		icons.push(<FaAndroid key="android" className="mb-1" />);
	}
	if (arr.includes("web")) {
		icons.push(<FaGlobe key="web" className="mb-1" />);
	}

	return <>{icons}</>;
};

export default PlatformIcons;
