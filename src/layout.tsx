import Sidebar from "./components/sidebar";
import { Outlet } from "react-router";

function Layout() {
	return (
		<div className="h-full w-full font-instrument-serif text-white">
			<Sidebar />
			<div className="-z-10 absolute top-0 left-0 w-full h-full">
				<img
					src="/RYHN7849.JPG"
					alt="Background"
					className="w-full h-full object-cover"
				/>
				<div className="absolute inset-0 bg-gradient-to-tr from-gray-950/80 to-gray-500/60 w-full h-full"></div>
			</div>
			<main className="flex w-full h-screen bg-cover bg-center bg-no-repeat overflow-y-auto">
				<Outlet />
			</main>
		</div>
	);
}

export default Layout;
