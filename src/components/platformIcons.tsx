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

	if (games.platforms) {
		Object.entries(games.platforms).map(([_, { platform }]) => {
			platform.slug.includes("playstation") && arr.push("playstation");
			platform.slug.includes("xbox") && arr.push("xbox");
			platform.slug.includes("pc") && arr.push("pc");
			platform.slug.includes("ios") && arr.push("ios");
			platform.slug.includes("android") && arr.push("android");
			platform.slug.includes("web") && arr.push("web");
		});
	}
	if (arr.includes("playstation")) {
		icons.push(<FaPlaystation key={"playstation"} className="mb-1" />);
	}
	if (arr.includes("xbox")) {
		icons.push(<FaXbox className="mb-1" />);
	}
	if (arr.includes("pc")) {
		icons.push(<FaWindows className="mb-1" />);
	}
	if (arr.includes("ios")) {
		icons.push(<FaApple className="mb-1" />);
	}
	if (arr.includes("android")) {
		icons.push(<FaAndroid className="mb-1" />);
	}
	if (arr.includes("web")) {
		icons.push(<FaGlobe className="mb-1" />);
	}

	return <>{icons}</>;
};

export default PlatformIcons;
