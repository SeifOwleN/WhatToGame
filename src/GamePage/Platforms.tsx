import { results } from "@/types";
import { FaAndroid, FaGlobe, FaXbox } from "react-icons/fa";
import {
	SiIos,
	SiMacos,
	SiNintendoswitch,
	SiPlaystation2,
	SiPlaystation3,
	SiPlaystation4,
	SiPlaystation5,
	SiWindows10,
	SiWindows11,
} from "react-icons/si";

const Platforms = ({ games }: { games: results }) => {
	const arr: string[] = [];
	const icons: JSX.Element[] = [];

	games?.platforms.map(({ platform }) => arr.push(platform.slug));

	if (arr.includes("playstation5")) {
		icons.push(<SiPlaystation5 className="mb-1 text-6xl" />);
	}

	if (arr.includes("playstation4")) {
		icons.push(<SiPlaystation4 className="mb-1" />);
	}
	if (arr.includes("playstation3")) {
		icons.push(<SiPlaystation3 className="mb-1" />);
	}
	if (arr.includes("playstation2")) {
		icons.push(<SiPlaystation2 className="mb-1" />);
	}
	if (
		arr.includes("xbox-one") ||
		arr.includes("xbox360") ||
		arr.includes("xbox-series-x")
	) {
		icons.push(<FaXbox className="mb-1 text-4xl" />);
	}
	if (arr.includes("pc")) {
		icons.push(<SiWindows10 className="mb-1 text-4xl" />);
	}
	if (arr.includes("macos")) {
		icons.push(<SiMacos className="mb-1" />);
	}
	if (arr.includes("nintendo-switch")) {
		icons.push(<SiNintendoswitch className="mb-1 text-4xl" />);
	}
	if (arr.includes("android")) {
		icons.push(<FaAndroid className="mb-1 text-4xl" />);
	}
	if (arr.includes("ios")) {
		icons.push(<SiIos className="mb-1 text-4xl" />);
	}
	if (arr.includes("web")) {
		icons.push(<FaGlobe className="mb-1 text-4xl" />);
	}

	return <>{icons}</>;
};

export default Platforms;
