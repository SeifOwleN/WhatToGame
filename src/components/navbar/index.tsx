import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import SearchBar from "./search";

const Navbar = () => {
	return (
		<div className="sticky top-0 bg-black z-10 min-h-[100px]  ">
			<div className="h-1/12 flex pt-9 ml-32 items-center">
				<Link to={"/"} className=" text-4xl text-red-500 font-notable">
					WTG
				</Link>
				<div className="flex-1 mx-4 ">
					<SearchBar />
				</div>
				<div id="RightSide" className="flex-0 font-inter text-white text-xl">
					<a className="mr-32" href="https://">
						Cart
					</a>
					<a className="mr-32" href="https://">
						Shop
					</a>
					<Button className="mr-32 px-6 py-3 rounded-lg">OwleN</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
