import {
  FaPlaystation,
  FaXbox,
  FaWindows,
  FaApple,
  FaAndroid,
  FaGlobe,
} from "react-icons/fa";
import { results } from "../../types";

const GamesList = ({ games }: { games: results }) => {
  const platformIcons = () => {
    const arr: string[] = [];
    const icons: JSX.Element[] = [];
    Object.entries(games.platforms).map(([_, { platform }]) => {
      platform.slug.includes("playstation") && arr.push("playstation");
      platform.slug.includes("xbox") && arr.push("xbox");
      platform.slug.includes("pc") && arr.push("pc");
      platform.slug.includes("ios") && arr.push("ios");
      platform.slug.includes("android") && arr.push("android");
      platform.slug.includes("web") && arr.push("web");
    });

    if (arr.includes("playstation")) {
      icons.push(<FaPlaystation className="mb-1" />);
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

    return icons;
  };
  return (
    <div className="w-96 border border-white relative mt-10 h-[350px] mr-10 flex flex-col rounded-3xl overflow-hidden hover:transform hover:scale-110 transition-transform ">
      <div className="absolute right-3 mix-blend-difference top-2">
        {platformIcons()}
      </div>
      <img
        src={games.background_image}
        className="min-h-[240px] object-cover"
      />
      <div className="flex items-center px-6 h-full text-xl ">
        <p>{games.name}</p>
      </div>
    </div>
  );
};

export default GamesList;
