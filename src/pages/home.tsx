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

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentTextIndex(
				(prevIndex) => (prevIndex + 1) % rotatingTexts.length,
			);
		}, 2000);
		return () => clearInterval(interval);
	}, [rotatingTexts.length]);

	return (
		<>
			<div className="w-full flex flex-row sm:flex-row sm:items-center gap-4 drop-shadow-md text-7xl italic">
				{/*<h1 className="whitespace-nowrap">Hello, I'm</h1>*/}
				<div className="w-full h-15 flex items-center overflow-visible">
					{rotatingTexts.map((text, index) => (
						<h1
							key={index}
							className={`absolute inset-0 transition duration-500 flex items-center font-bold whitespace-nowrap ${index == currentTextIndex ? "text-white blur-none" : "text-transparent blur-lg"}`}
						>
							{text}
						</h1>
					))}
				</div>
			</div>
			{/* Carousel */}
			{/*<div
				className="w-full h-[400px] mx-auto overflow-hidden"
				style={{
					WebkitMaskImage:
						"linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
					maskImage:
						"linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
				}}
			>
				<div
					className="flex flex-row h-[400px] w-fit transition-transform duration-500 ease-in-out"
					style={{
						transform:
							"translateX(-" + currentTextIndex * 896 + "px)",
					}}
				>
					{previewImages.map((image, index) => (
						<div className="w-4xl flex-shrink-0">
							<img
								key={index}
								src={image}
								alt="Image Description"
								className="w-[600px] h-[400px] mx-auto"
							/>
						</div>
					))}
				</div>
			</div>*/}
		</>
	);
}

function Home() {
	return (
		<ContentWrapper>
			<div className="flex flex-col w-full h-screen p-4 bg-red-200">
				<div className="flex-1"></div>
				<RotatingHeader />
			</div>
			<p className="text-2xl glass rounded-4xl p-4 text-justify font-xanh-mono">
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
