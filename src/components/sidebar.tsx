import { PanelLeftOpen, PanelLeftClose } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

const BlurOverlay = ({
	isOpen,
	onClick,
}: {
	isOpen: boolean;
	onClick: () => void;
}) => (
	<div
		className={`z-10 fixed inset-0 transition-opacity duration-500 ease-in-out backdrop-blur-md bg-gradient-to-r from-gray-300/20 to-gray-900/60
                    ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
		onClick={onClick}
	/>
);

function Sidebar() {
	const [isOpen, setIsOpen] = useState(false);
	const transitionDelayMilliseconds: number = 50;

	const sidebarButtons = {
		Home: "/",
		Projects: "/projects",
		Photography: "/photography",
		Videography: "/videography",
		"Graphic Design": "/graphic-design",
	};

	return (
		<>
			{/* Blur box */}
			<BlurOverlay isOpen={isOpen} onClick={() => setIsOpen(false)} />
			{/* Toggle button */}
			<button
				className="z-10 fixed glass glass-hover rounded-full flex items-center justify-center m-4 h-12 w-12 cursor-pointer"
				onClick={() => setIsOpen(!isOpen)}
			>
				<PanelLeftClose
					strokeWidth={1.5}
					className={`absolute drop-shadow-md transition-all duration-500 ${isOpen ? "opacity-100" : "opacity-0"}`}
				/>
				<PanelLeftOpen
					strokeWidth={1.5}
					className={`absolute drop-shadow-md transition-all duration-500 ${isOpen ? "opacity-0" : "opacity-100"}`}
				/>
			</button>

			{/* Buttons */}
			<ul
				className={`z-10 fixed my-20 space-y-4 ml-4 pointer-events-none`}
			>
				{Object.entries(sidebarButtons).map(([title, link], index) => (
					<li
						key={title}
						className={`w-fit duration-500 transition-transform ease-in-out ${isOpen ? "-translate-x-0" : "-translate-x-64"}`}
						style={{
							transitionDelay: `${index * transitionDelayMilliseconds}ms`,
						}}
					>
						<Link
							to={link}
							className="pointer-events-auto glass glass-hover rounded-full flex items-center text-2xl italic h-12 w-fit px-4 hover:translate-x-2 font-semibold"
						>
							{title}
						</Link>
					</li>
				))}
			</ul>
		</>
	);
}

export default Sidebar;
