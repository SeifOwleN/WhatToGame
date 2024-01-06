import { Movie } from "@/types";
import { useEffect, useRef } from "react";
import { useState } from "react";
import {
	FaCog,
	FaPause,
	FaPlay,
	FaVolumeDown,
	FaVolumeMute,
} from "react-icons/fa";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuLabel,
	DropdownMenuRadioGroup,
	DropdownMenuRadioItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Slider } from "../ui/slider";

const Player = ({ videoData }: { videoData: Movie }) => {
	const videoRef = useRef<HTMLVideoElement>(null);
	const [quality, setQuality] = useState<string>("");

	useEffect(() => {
		if (videoData.data) {
			setQuality("480");
		}
	}, [videoData]);

	const Controls = () => {
		const [isPlayed, setIsPlayed] = useState<boolean>(false);
		const [isMuted, setIsMuted] = useState<boolean>(true);
		const [progress, setProgress] = useState<number[]>([0]);
		const [progressX, setProgressX] = useState<number[]>([0]);
		const [dropdownOpened, setDropdownOpened] = useState<boolean>(false);

		useEffect(() => {
			if (videoRef.current && quality) {
				videoRef.current.load();
			}
		}, [quality]);

		useEffect(() => {
			if (videoRef?.current?.currentTime && progressX) {
				console.log(
					"videoRef.current.currentTime",
					videoRef.current.currentTime,
				);
				videoRef.current.currentTime =
					(progressX[0] / 100) * videoRef.current.duration;

				videoRef.current.pause();
				const onSeeked = () => {
					videoRef?.current?.removeEventListener("seeked", onSeeked);
					videoRef?.current?.play();
				};
				videoRef.current.addEventListener("seeked", onSeeked);
			}
		}, [progressX]);

		videoRef?.current?.addEventListener("timeupdate", () => {
			if (videoRef?.current?.currentTime && progress) {
				setProgress([
					Math.floor(
						(videoRef.current?.currentTime / videoRef.current?.duration) * 100,
					),
				]);
			}
		});

		const TogglePlay = () => {
			!isPlayed ? videoRef?.current?.play() : videoRef?.current?.pause();
			setIsPlayed(!isPlayed);
		};

		const ToggleMute = () => {
			if (videoRef?.current) {
				videoRef.current.muted = !isMuted;
			}
			setIsMuted(!isMuted);
		};

		const TopBar = () => {
			return (
				<div className="flex w-full items-center h-16 bg-gradient-to-b from-black to-transparent to-90%">
					<p className="text-white font-bold text-lg ml-6">{videoData?.name}</p>
				</div>
			);
		};

		const MiddleButton = () => {
			return (
				<button
					type="button"
					onClick={TogglePlay}
					className="rounded-full flex justify-center items-center xl:h-16 h-12 aspect-square bg-black text-white"
				>
					{isPlayed ? <FaPause /> : <FaPlay />}
				</button>
			);
		};

		const BottomBar = () => {
			return (
				<div className="flex items-center  bg-gradient-to-t from-black  to-transparent  h-16 w-full justify-evenly">
					<button className="text-white" type="button" onClick={TogglePlay}>
						{isPlayed ? <FaPause /> : <FaPlay />}
					</button>

					<Slider
						value={progress}
						onValueChange={(e) => {
							setProgress(e);
							setProgressX(e);
						}}
						max={100}
						step={1}
						className="w-[80%]"
					/>
					<button
						className="text-white text-xl"
						type="button"
						onClick={ToggleMute}
					>
						{isMuted ? <FaVolumeMute /> : <FaVolumeDown />}
					</button>
					<DropdownMenu
						open={dropdownOpened}
						onOpenChange={(e) => setDropdownOpened(e)}
					>
						<DropdownMenuTrigger type="button" className="text-white text-xl">
							<FaCog />
						</DropdownMenuTrigger>
						<DropdownMenuContent side="top" align="end">
							<DropdownMenuLabel>Quality</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuRadioGroup
								value={quality}
								onValueChange={(e) => setQuality(e)}
							>
								<DropdownMenuRadioItem value="max">1080</DropdownMenuRadioItem>
								<DropdownMenuRadioItem value="480">480</DropdownMenuRadioItem>
							</DropdownMenuRadioGroup>
						</DropdownMenuContent>
					</DropdownMenu>
				</div>
			);
		};

		return (
			<div
				className={`items-center absolute ml-3 z-10 top-0 bottom-0 left-0 right-0 flex flex-col justify-between hover:transition delay-300 hover:delay-0 duration-200  ${
					dropdownOpened ? "opacity-100" : "opacity-0"
				} hover:opacity-100`}
			>
				{TopBar()}
				{MiddleButton()}
				{BottomBar()}
			</div>
		);
	};

	return (
		<>
			<video
				id="my-player"
				preload="none"
				ref={videoRef}
				className="w-full h-full"
				poster={videoData.preview}
				muted
			>
				{quality === "max" ? (
					<source src={videoData.data.max} type="video/mp4" id="1080" />
				) : (
					<source src={videoData.data[480]} type="video/mp4" id="480" />
				)}
			</video>
			{Controls()}
		</>
	);
};

export default Player;
