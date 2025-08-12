import ContentWrapper from "../components/content-wrapper";
import { useState, useEffect } from "react";

function RotatingHeader() {
	const rotatingTexts = [
		"Rayhan",
		"an engineer",
		"a developer",
		"a designer",
		"a photographer",
		"a videographer",
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
			<div className="drop-shadow-md italic whitespace-nowrap select-none">
				<p className="text-6xl">Hello, I'm</p>
				<div className="text-8xl font-bold">
					{/*Placeholder text to offset the above text accordingly.
					Needed because absolute positioning doesn't describe size.
					Decided to do this instead of h-XX since it's more adaptable*/}
					<p className="text-transparent">
						{rotatingTexts[currentTextIndex]}
					</p>
					{/*The actual morphing text visible to the user*/}
					{rotatingTexts.map((text, index) => (
						<p
							key={index}
							className={`absolute bottom-0 transition-all duration-500 ease-in-out ${index == currentTextIndex ? "text-white blur-none" : "text-transparent blur-lg"}`}
						>
							{text}
						</p>
					))}
				</div>
			</div>
		</>
	);
}

function Home() {
	return (
		<ContentWrapper>
			<div className="flex flex-col w-full h-screen p-8">
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
