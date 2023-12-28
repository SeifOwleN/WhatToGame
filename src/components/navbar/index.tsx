import { SyntheticEvent, useState } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import SearchBar from "./search";

const Navbar = () => {
	const [search, setSearch] = useState<boolean>(false);
	const [bar, setBar] = useState<boolean>(false);

	const toggleSearch = (e: SyntheticEvent) => {
		e.preventDefault();
		setSearch(!search);
	};

	const toggleBar = (e: SyntheticEvent) => {
		e.preventDefault();
		setBar(!bar);
	};

	const SearchS = () => {
		return (
			<>
				<div className="flex-1 mx-8 sm:block hidden ">
					<SearchBar />
				</div>

				<div
					className={`${
						search ? "block" : "hidden"
					} flex-1 mx-8 flex relative sm:hidden items-center`}
				>
					<SearchBar />
					<button
						type="button"
						onClick={toggleSearch}
						className="absolute -right-7 text-xl"
					>
						<AiOutlineClose />
					</button>
				</div>
				<button
					className={`${
						search ? "opacity-0 hidden" : "opacity-100 block"
					} sm:hidden transition-all ease-in-out delay-150 text-xl flex-0`}
					type="button"
					onClick={toggleSearch}
				>
					<AiOutlineSearch />
				</button>
			</>
		);
	};

	return (
		<div className="sticky top-0 bg-black z-10 min-h-[100px]  ">
			<div className="h-1/12 flex pt-9 justify-between md:ml-24 sm:justify-normal mx-6 items-center">
				<Link to={"/"} className="text-4xl text-red-500 font-notable">
					WTG
				</Link>
				<div className="sm:flex-1 flex items-center">
					{SearchS()}
					<button
						type="button"
						onClick={toggleBar}
						className="text-xl sm:m-0 ml-3 lg:hidden block"
					>
						<AiOutlineMenu />
					</button>
				</div>
				<div
					id="RightSide"
					className="flex-0 lg:block hidden font-inter text-white text-xl"
				>
					<a className="mr-28" href="https://">
						Placeholder
					</a>
					<a className="mr-28" href="https://">
						Placeholder1
					</a>
					<Button className=" mr-10 px-6 py-3 rounded-lg">OwleN</Button>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
