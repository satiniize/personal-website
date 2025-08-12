import React, { useState, useEffect } from "react";

function ContentWrapper({ children }: Readonly<{ children: React.ReactNode }>) {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(false);
		const timer = setTimeout(() => {
			setIsVisible(true);
		}, 50);
		return () => {
			clearTimeout(timer);
			setIsVisible(false);
		};
	}, []);

	return (
		<div
			className={`h-fit mx-auto max-w-4xl pt-20 pb-4 px-4 space-y-4 transition-opacity duration-500 ease-in-out ${isVisible ? "opacity-100" : "opacity-0"}`}
		>
			{children}
		</div>
	);
}

export default ContentWrapper;
