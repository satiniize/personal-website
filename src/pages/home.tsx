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
			<div className="outline outline-red-400 drop-shadow-md text-7xl italic">
				<h1 className="outline outline-yellow-400 whitespace-nowrap">
					Hello, I'm
				</h1>
				<div className="outline outline-cyan-400">
					<h1 className="text-transparent">PLACEHOLDER</h1>
					{rotatingTexts.map((text, index) => (
						<h1
							key={index}
							className={`outline outline-lime-400 absolute bottom-0 transition duration-500 font-bold whitespace-nowrap ${index == currentTextIndex ? "text-white blur-none" : "text-transparent blur-lg"}`}
						>
							{text}
						</h1>
					))}
				</div>
			</div>
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
