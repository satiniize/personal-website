import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";

import "./index.css";
import Home from "./pages/home.tsx";
import Photography from "./pages/photography.tsx";
import Projects from "./pages/projects.tsx";
import Layout from "./layout.tsx";
import Videography from "./pages/videography.tsx";
import GraphicDesign from "./pages/graphic-design.tsx";

createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<BrowserRouter>
			<Routes>
				<Route element={<Layout />}>
					<Route path="/" element={<Home />} />
					<Route path="/photography" element={<Photography />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/videography" element={<Videography />} />
					<Route path="/graphic-design" element={<GraphicDesign />} />
				</Route>
			</Routes>
		</BrowserRouter>
	</StrictMode>,
);
