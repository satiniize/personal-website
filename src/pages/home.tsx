import ContentWrapper from "../components/content-wrapper";
import Header from "../components/header";
import { useState, useEffect } from "react";

function RotatingHeader() {
	const rotatingTexts = [
		"Rayhan",
		"an engineer",
		"a designer",
		"a developer",
	];
	const previewImages = [
		"/RYHN8244.JPG",
		"/RYHN8236.JPG",
		"/RYHN8202.JPG",
		"/RYHN8148.JPG",
	];

	const [currentTextIndex, setCurrentTextIndex] = useState(0);
	const [isScrollingDown, setIsScrollingDown] = useState(true);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTextIndex((prevIndex) => {
				if (prevIndex <= 0) {
					setIsScrollingDown(true);
					return prevIndex + 1;
				} else if (prevIndex >= rotatingTexts.length - 1) {
					setIsScrollingDown(false);
					return prevIndex - 1;
				}
				return isScrollingDown ? prevIndex + 1 : prevIndex - 1;
			});
		}, 2000);
		return () => clearInterval(interval);
	}, [rotatingTexts.length, isScrollingDown]);

	return (
		<>
			<div className="outline outline-red-400 w-full flex flex-col sm:flex-row sm:items-center gap-4 drop-shadow-md text-6xl italic">
				<span className="outline outline-blue-400 whitespace-nowrap">
					Hello, I'm
				</span>
				<div className="outline outline-yellow-400 w-full h-15 flex items-center overflow-visible">
					<div
						className={`w-full h-30 overflow-hidden`}
						style={{
							WebkitMaskImage:
								"linear-gradient(transparent, black 25%, black 75%, transparent)",
							maskImage:
								"linear-gradient(transparent, black 25%, black 75%, transparent)",
						}}
					>
						<div
							className="transition-transform duration-500 ease-in-out"
							style={{
								transform:
									"translateY(-" +
									currentTextIndex * 30 * 4 +
									"px)",
							}}
						>
							{rotatingTexts.map((text, index) => (
								<p
									key={index}
									className="h-30 flex items-center font-bold whitespace-nowrap"
								>
									{text}
								</p>
							))}
						</div>
					</div>
				</div>
			</div>
			{/* Carousel */}
			<div
				className="outline outline-red-400 w-full h-[400px] mx-auto overflow-hidden"
				style={{
					WebkitMaskImage:
						"linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
					maskImage:
						"linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
				}}
			>
				<div
					className="outline outline-yellow-400 flex flex-row h-[400px] w-fit transition-transform duration-500 ease-in-out"
					style={{
						transform:
							"translateX(-" + currentTextIndex * 896 + "px)",
					}}
				>
					{previewImages.map((image, index) => (
						<div className="w-4xl flex-shrink-0 border border-white">
							<img
								key={index}
								src={image}
								alt="Image Description"
								className="w-[600px] h-[400px] mx-auto"
							/>
						</div>
					))}
				</div>
			</div>
		</>
	);
}

function Home() {
	return (
		<ContentWrapper>
			<RotatingHeader />
			<p className="text-md glass rounded-4xl p-4 text-justify font-ibm-plex-mono">
				A mechanical engineering student at the National University of
				Singapore with a strong interest in mechatronics and CAD design.
				Proficient in SolidWorks and Excel. Also skilled in Python, C++,
				and TypeScript, with hands-on experience in web and game
				development.
			</p>
		</ContentWrapper>
	);
}

export default Home;
